.PHONY: install
install:
	npm install

.PHONY: dev
dev:
	npm run dev

.PHONY: build
build:
	npm run build

.PHONY: preview
preview:
	npm run preview

.PHONY: test
test:
	npm test

.PHONY: lint
lint:
	npm run lint

.PHONY: lint-fix
lint-fix:
	npm run lint:fix

.PHONY: prettier
prettier:
	npm run prettier

.PHONY: prettier-fix
prettier-fix:
	npm run prettier:fix

.PHONY: stylelint
stylelint:
	npm run stylelint

.PHONY: stylelint-fix
stylelint-fix:
	npm run stylelint:fix

.PHONY: lint-md
lint-md:
	npm run lint-md

.PHONY: lint-md-fix
lint-md-fix:
	npm run lint-md:fix

.PHONY: lint-html
lint-html:
	npm run lint-html

.PHONY: check-for-dupes
check-for-dupes:
	npm run check-for-dupes
