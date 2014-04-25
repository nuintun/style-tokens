clean:
	@rm -fr _site
	
runner = _site/tests/runner.html
test:
	@mocha-browser ${runner} -S
	
output = _site/coverage.html
coverage:
	@rm -fr _site/src-cov
	@jscoverage --encoding=utf8 src _site/src-cov
	@mocha-browser ${runner}?cov -S -R html-cov > ${output}
	@echo "Build coverage to ${output}"

.PHONY: clean test coverage
