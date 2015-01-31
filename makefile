REPORTER = dot

app:
	node index.js

test:
	./node_modules/.bin/mocha \
	--reporter $(REPORTER) \

test-w:
	./node_modules/.bin/mocha \
	--reporter $(REPORTER) \
	--growl \
	--watch

coverage:
	npm test --coverage

.PHONY: test test-w coverage