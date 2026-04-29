#!/bin/sh
cat > config.js << EOF
window.CONFIG = {
  SUPABASE_URL: "$SUPABASE_URL",
  SUPABASE_KEY: "$SUPABASE_KEY"
};
EOF
