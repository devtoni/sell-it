IMAGE_NAME = sell-it
DOCKER_REPO = personal.local:5000

# Get the short commit value of the last commit
export IMAGE_TAG = $(shell git rev-parse --short HEAD)

# Build Docker image and tag it with the short commit value
build:
	docker build --no-cache -t $(DOCKER_REPO)/$(IMAGE_NAME):$(IMAGE_TAG) .

# Push the tagged image and mark it as latest
push:
	docker push $(DOCKER_REPO)/$(IMAGE_NAME):$(IMAGE_TAG)
	docker tag $(DOCKER_REPO)/$(IMAGE_NAME):$(IMAGE_TAG) $(DOCKER_REPO)/$(IMAGE_NAME):latest
	docker push $(DOCKER_REPO)/$(IMAGE_NAME):latest