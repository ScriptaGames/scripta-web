REPO='git@github.com:ScriptaGames/ScriptaGames.github.io.git'
BRANCH='master'
CNAME='scripta.co'

TRACER_REPO='git@github.com:ScriptaGames/Tracer.git'

deploy:
	rm -rf ./build
	wintersmith build
	cd ./build && \
	echo $(CNAME) > CNAME && \
	git clone $(TRACER_REPO) tracer.tmp && \
	cp -r tracer.tmp/src/ tracer && \
	rm -rf tracer.tmp tracer/.git  && \
	git init . && \
	git add . && \
	git commit -m "Deploy"; \
	git push $(REPO) master:$(BRANCH) --force && \
	rm -rf .git
