import fs from "fs";
import path from "path";

function checkImports(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      checkImports(fullPath); // recursivo
    } else if (/\.(jsx?|tsx?)$/.test(file)) {
      const content = fs.readFileSync(fullPath, "utf-8");

      // pega todos os imports "from '...'" e require("...")
      const regex = /(from\s+['"](.+)['"])|require\(['"](.+)['"]\)/g;
      let match;
      while ((match = regex.exec(content))) {
        const importPath = match[2] || match[3];

        // só verifica imports relativos (./ ou ../)
        if (importPath && importPath.startsWith(".")) {
          const resolvedPath = path.resolve(dir, importPath);
          const dirName = path.dirname(resolvedPath);

          if (fs.existsSync(dirName)) {
            const filesInDir = fs.readdirSync(dirName);
            const baseImport = path.basename(resolvedPath);

            // procura se o import bate exatamente com algum arquivo/pasta
            if (!filesInDir.some(f => f.startsWith(baseImport))) {
              console.log(`⚠️  Possível erro de case em: ${fullPath}`);
              console.log(`    → Import usado: ${importPath}`);
              console.log(`    → Arquivos nessa pasta: [${filesInDir.join(", ")}]\n`);
            }
          }
        }
      }
    }
  }
}

// Início: pasta src
checkImports(path.join(process.cwd(), "src"));
