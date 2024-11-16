## 概要
LLMとチャットできるアプリ  
サーバは以下リポジトリ  
https://github.com/nakajima97/llm-chat-app-server

## setup
```bash
yarn
cp .env.local.sample .env.local
```

## versions
- Node.js 22.4.1

## format
check  
`yarn biome format ./src`

fix  
`yarn biome format --write ./src`

## lint
check  
`yarn biome lint ./src`

fix  
`yarn biome lint --write ./src`

## format & lint
check  
`yarn biome check ./src`

fix  
`yarn biome check --write ./src`
