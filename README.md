configuration

[OS]
    wsl(linux:Ubuntu22.04)(check:cat /etc/os-release or hostnamectl)

[Server]
    python(check:python3 --version)
    virtualenv(check:virtualenv --version)
    fastapi(check:In virtualenv, pip list | grep fastapi)

[Web]
    Node.js(check:node -v)
    npm(check:npm -v)
    svelte()
