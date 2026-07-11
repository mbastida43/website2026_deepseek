# run-website.ps1
# Script para configurar e executar a Landing Page Glassmorphism

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  LANDING PAGE - CONFIGURAÇÃO E START  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar Node.js
Write-Host "[1/5] Verificando Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    $npmVersion = npm --version
    Write-Host "  ✓ Node.js $nodeVersion" -ForegroundColor Green
    Write-Host "  ✓ npm $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Node.js não encontrado! Instale em https://nodejs.org" -ForegroundColor Red
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Limpar instalação anterior
Write-Host ""
Write-Host "[2/5] Limpando instalação anterior..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
    Write-Host "  ✓ node_modules removido" -ForegroundColor Green
}
if (Test-Path "package-lock.json") {
    Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
    Write-Host "  ✓ package-lock.json removido" -ForegroundColor Green
}
Write-Host "  ✓ Limpeza concluída" -ForegroundColor Green

# Criar/Verificar package.json
Write-Host ""
Write-Host "[3/5] Verificando package.json..." -ForegroundColor Yellow
$packageJson = @'
{
  "name": "landing-page-glass",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
'@
$packageJson | Out-File -FilePath "package.json" -Encoding UTF8 -Force
Write-Host "  ✓ package.json atualizado" -ForegroundColor Green

# Verificar estrutura de arquivos
Write-Host ""
Write-Host "[4/5] Verificando estrutura de arquivos..." -ForegroundColor Yellow
$requiredFiles = @(
    "src\index.js",
    "src\index.css",
    "src\App.jsx",
    "src\App.css",
    "src\components\Header.jsx",
    "src\components\Header.css",
    "src\components\GlassPanel.jsx",
    "src\components\GlassPanel.css",
    "src\components\CardsSection.jsx",
    "src\components\CardsSection.css",
    "public\index.html"
)

$allFilesExist = $true
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "  ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file - ARQUIVO FALTANDO!" -ForegroundColor Red
        $allFilesExist = $false
    }
}

if (-not $allFilesExist) {
    Write-Host ""
    Write-Host "  ⚠ Arquivos faltando! Verifique se todos os arquivos foram criados." -ForegroundColor Red
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Instalar dependências
Write-Host ""
Write-Host "[5/5] Instalando dependências..." -ForegroundColor Yellow
Write-Host "  Isso pode levar alguns minutos..." -ForegroundColor Gray
Write-Host ""

npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "  ✗ Erro na instalação! Tentando método alternativo..." -ForegroundColor Red
    npm install --legacy-peer-deps
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "  ✗ Falha na instalação. Verifique sua conexão e tente novamente." -ForegroundColor Red
        Read-Host "Pressione Enter para sair"
        exit 1
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  CONFIGURAÇÃO CONCLUÍDA COM SUCESSO!  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Iniciando servidor de desenvolvimento..." -ForegroundColor Yellow
Write-Host "O navegador abrirá automaticamente em http://localhost:3000" -ForegroundColor Gray
Write-Host "Para parar o servidor: Ctrl+C" -ForegroundColor Gray
Write-Host ""

# Iniciar o projeto
npm start