!/bin/sh

chmod u+x ./scripts/spinner.sh

 ./scripts/spinner.sh "lerna run build" "..." "📦 Building packages"

# ./scripts/spinner.sh "yarn new-version" "..." "⬆️ Updating versions"

lerna run build