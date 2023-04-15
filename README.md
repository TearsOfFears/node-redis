# node-redis
node-redis

For start project you <b>need</b>:
<ol>
 <li>Clone project.</li>
 <li>Create <code>.env<code/> file in root directory with this env variables: 
 <pre>PORT=4444

REDIS_PORT=6379
REDIS_PASSWORD=12345

POSTGRES_PORT=5416
POSTGRES_DB=dvdrental
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=admin
</pre>
 </li>
 <li>Run docker compose file with <code>docker-compose up</code> in root directory</li>
 <li>Run <code>npm run start:dev</code> command</li>
</ol>
