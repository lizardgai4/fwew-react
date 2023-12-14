TIMESTAMP = $(shell date +"%Y-%m-%d")
COMMITSHA = $(shell git rev-parse --short HEAD)
BUILD_DIR = ./dist

default: build

build:
	eas build -p android -e preview --local --output="$(BUILD_DIR)/fwew-react-next-$(TIMESTAMP)-$(COMMITSHA).apk"

build-prod:
	eas build -p android -e production --local --output="$(BUILD_DIR)/fwew-react-next-$(TIMESTAMP)-$(COMMITSHA).apk"

build-remote:
	eas build -p android -e preview

build-prod-remote:
	eas build -p android -e production
