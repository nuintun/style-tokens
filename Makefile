specs := $(shell find ./tests -name '*-tests.js' ! -path "*node_modules/*")
reporter = spec
test:
	@node_modules/.bin/mocha --reporter ${reporter} ${specs}
	
clean:
	@rm -fr _site
	
output = _site/coverage.html
coverage:
	@rm -fr _site/src-cov
	@jscoverage --encoding=utf8 src _site/src-cov
	@mocha-browser ${runner}?cov -S -R html-cov > ${output}
	@echo "Build coverage to ${output}"

.PHONY: test clean coverage
