all:
	@npm install -d

specs := $(shell find ./tests -name '*.tests.js' ! -path "*node_modules/*")
reporter = spec
test:
	@node_modules/.bin/mocha --reporter ${reporter} ${specs}

out = _site/coverage.html
coverage:
	@rm -rf lib-cov
	@jscoverage lib lib-cov
	@CMD_COVERAGE=1 $(MAKE) test reporter=html-cov > ${out}
	@rm -rd lib-cov
	@echo
	@echo "Built Report to ${out}"
	@echo

coveralls:
	@node_modules/.bin/jscoverage lib lib-cov
	@CMD_COVERAGE=1 $(MAKE) test reporter=mocha-lcov-reporter | node_modules/.bin/coveralls
	@rm -rf lib-cov

clean:
	@rm -fr _site

.PHONY: all build test lint coverage
