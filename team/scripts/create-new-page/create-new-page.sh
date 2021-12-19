set -x
project_path="../../.."
for page in "$@"; do
    cp ${project_path}/src/App.tsx ./
    sed -i "/^.*<\/Routes>/i\             <Route path=\"/${page}\" element={<"${page^}"/>}/>" ${project_path}/src/App.tsx
    sed  -i "2 a import ${page^} from './pages/${page}'" ${project_path}/src/App.tsx
    cp -r template ${page}
    sed -i "s/NAME/${page^}/g" ${page}/index.tsx
    mv ${page} ${project_path}/src/pages
done
set +x