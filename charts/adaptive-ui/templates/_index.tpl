{{/*
Additional service ports
*/}}
{{- define "asee.adaptive-ui.513iuibv.extension.service.ports" -}}
{{/*
- port: 443
  targetPort: https
  protocol: TCP
  name: https
*/}}
{{- end -}}

{{/*
Additional pod spec
*/}}
{{- define "asee.adaptive-ui.513iuibv.extension.deployment.pod.spec" -}}
{{/*
dnsConfig:
  options:
  - name: "ndots"
    value: "1"
*/}}
{{- end -}}

{{/*
Additional pod volumes
*/}}
{{- define "asee.adaptive-ui.513iuibv.extension.deployment.pod.volumes" -}}
{{/*
- name: {{ include "asee.trait.core.fullname" . }}-configuration-folder
  secret:
    secretName: {{ include "asee.trait.core.resource-name" ( dict "context" . "existingName" .Values.configurationFolderExistingSecret "defaultNameSuffix" "configuration-folder" ) }}
*/}}
{{- end -}}

{{/*
Additional init containers
*/}}
{{- define "asee.adaptive-ui.513iuibv.extension.deployment.pod.init-containers" -}}
{{/*
# Add below variables to values.yaml file and change values
dummyImageRegistry: "registry.see.asseco.com"
dummyImageRepository: "public/alpine"
dummyImageTag: "3"
# dummyImagePullPolicy: ""
/*}}
{{/*
- name: dummy-init
  image: {{ include "asee.trait.container-registry.image" ( dict "context" . "prefix" "dummy" ) }}
  imagePullPolicy: {{ include "asee.trait.container-registry.image.pull-policy" ( dict "context" . "prefix" "dummy" ) }}
  command:
  - "sh"
  - "-c"
  - >
    echo "Hello world!"
*/}}
{{- end -}}

{{/*
Additional container ports
*/}}
{{- define "asee.adaptive-ui.513iuibv.extension.deployment.pod.container.ports" -}}
{{/*
- name: https
  containerPort: 8443
*/}}
{{- end -}}

{{/*
Additional container variables
*/}}
{{- define "asee.adaptive-ui.513iuibv.extension.deployment.pod.container.variables" -}}
{{/*
- name: "ENV_SIMPLE_VARIABLE"
  value: "false"
- name: "ENV_FROM_SECRET"
  valueFrom:
    secretKeyRef:
      name: {{ include "asee.trait.core.resource-name" ( dict "context" $context "existingName" .Values.envFromSecretExistingSecret "defaultNameSuffix" "env-from-secret" ) }}
      key: [KEY-NAME]
*/}}
{{- end -}}

{{/*
Additional container volume mounts
*/}}
{{- define "asee.adaptive-ui.513iuibv.extension.deployment.pod.container.volume-mounts" -}}
{{/*
- name: {{ include "asee.trait.core.fullname" . }}-configuration-folder
  mountPath: {{ .Values.startupPath }}/configuration/folder
*/}}
{{- end -}}

