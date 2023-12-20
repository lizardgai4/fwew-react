BUILD_DATE = $(shell date +"%Y-%m-%d")
GIT_BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
COMMIT_SHA = $(shell git rev-parse --short HEAD)
OUTPUT_DIR = ./dist

export EXPO_PUBLIC_GIT_BRANCH      = $(GIT_BRANCH)
export EXPO_PUBLIC_GIT_COMMIT_HASH = $(COMMIT_SHA)

default: build

build:
	eas build -p android -e preview --local --output="$(OUTPUT_DIR)/fwew-react-next-$(BUILD_DATE)-$(COMMIT_SHA).apk"

build-prod:
	eas build -p android -e production --local --output="$(OUTPUT_DIR)/fwew-react-next-$(BUILD_DATE)-$(COMMIT_SHA).apk"

build-remote:
	eas build -p android -e preview

build-prod-remote:
	eas build -p android -e production

run:
	npm run start

run-better:
	npm run start -- --clear --tunnel
