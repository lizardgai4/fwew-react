BUILD_DATE = $(shell date +"%Y-%m-%d")
COMMIT_SHA = $(shell git rev-parse --short HEAD)
OUTPUT_DIR = ./dist

default: build

build:
	eas build -p android -e preview --local --output="$(OUTPUT_DIR)/fwew-react-next-$(BUILD_DATE)-$(COMMIT_SHA).apk"

build-prod:
	eas build -p android -e production --local --output="$(OUTPUT_DIR)/fwew-react-next-$(BUILD_DATE)-$(COMMIT_SHA).apk"

build-remote:
	eas build -p android -e preview

build-prod-remote:
	eas build -p android -e production
