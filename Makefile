REPO='git@github.com:ScriptaGames/ScriptaGames.github.io.git'
BRANCH='master'
CNAME='scripta.co'

deploy:
	rm -rf ./build
	wintersmith build
	cd ./build && \
	echo $(CNAME) > CNAME && \
	git init . && \
	git add . && \
	git commit -m "Deploy"; \
	git push $(REPO) master:$(BRANCH) --force && \
	rm -rf .git
