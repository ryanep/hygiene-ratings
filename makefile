# Colours
COLOUR_YELLOW = "\033[1;33m"
COLOUR_RED = "\033[1;31m"
COLOUR_GREEN = "\033[0;32m"
COLOUR_END = "\033[0m"

# Tasks
TASK_STARTED = @echo ${COLOUR_YELLOW} - Task started: $@ ${COLOUR_END}
TASK_DONE = @echo ${COLOUR_GREEN} âœ“ Task succeeded: $@ ${COLOUR_END}
TASK_FAILED = @echo ${COLOUR_RED} âœ˜ Task failed: $@ ${COLOUR_END}

.PHONY:

build-api:
	NODE_ENV=production && \
	rm -rf ./dist ./hygiene-ratings.tar.gz && \
	yarn && \
  rsync -am --include="*.graphql" --include="*/" --exclude="*" "./src/graphql" "./dist" && \
	yarn build && \
	docker build -t dokku/hygiene-ratings:latest . && \
	docker save dokku/hygiene-ratings:latest -o ./hygiene-ratings.tar && \
	gzip -f ./hygiene-ratings.tar
deploy-api:
	scp -o StrictHostKeyChecking=no ./hygiene-ratings.tar.gz ${DO_USER}@${DO_IP}:~/
	ssh -o StrictHostKeyChecking=no ${DO_USER}@${DO_IP} " \
		gunzip -f ~/hygiene-ratings.tar.gz && \
		docker load -i ~/hygiene-ratings.tar && \
		rm -f hygiene-ratings.tar \
	"
	ssh -o StrictHostKeyChecking=no ${DO_USER}@${DO_IP} " \
		dokku tags:create hygiene-ratings previous && \
		dokku tags:deploy hygiene-ratings latest && \
		dokku tags:create hygiene-ratings latest && \
		dokku cleanup hygiene-ratings && rm -f ~/hygiene-ratings.tar && \
		docker image prune -a -f --filter "label=hygiene-ratings" && \
		docker system prune -f --volumes \
	"
release: build-api deploy-api
