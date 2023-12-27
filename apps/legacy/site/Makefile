include resources/scripts/build.mk

SHELL := /bin/bash
K8S_DIR = resources/k8s/sell-it

install:
	@npm ci && npm run bower:install

dev: install
	@docker compose up -d && npm run dev

deploy: build push apply-yaml clean

apply-yaml:
	@echo "Applying ConfigMap and related resources..."
	@source .env.production && envsubst < "${K8S_DIR}/web/configmap.template.yaml" > "${K8S_DIR}/web/configmap.yaml"
	@envsubst < "${K8S_DIR}/web/deployment.template.yaml" > "${K8S_DIR}/web/deployment.yaml"
	@kubectl apply -f "${K8S_DIR}/web/configmap.yaml"
	@kubectl apply -f "${K8S_DIR}/web/deployment.yaml"
	@kubectl apply -f "${K8S_DIR}/web/service.yaml"
	@kubectl apply -f "${K8S_DIR}/mongodb"

clean:
	@echo "Cleaning up..."
	@rm "${K8S_DIR}/web/configmap.yaml"
	@rm "${K8S_DIR}/web/deployment.yaml"
	
