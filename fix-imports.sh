#!/bin/bash

# Fix unused imports in all files
echo "Fixing unused imports..."

# CommunityForum.tsx
sed -i 's/import React, { useState } from '\''react'\'';/import { useState } from '\''react'\'';/g' src/pages/CommunityForum.tsx
sed -i 's/Textarea,//g' src/pages/CommunityForum.tsx
sed -i 's/Flag,//g' src/pages/CommunityForum.tsx
sed -i 's/TrendingUp,//g' src/pages/CommunityForum.tsx
sed -i 's/Clock,//g' src/pages/CommunityForum.tsx
sed -i 's/Link,//g' src/pages/CommunityForum.tsx
sed -i 's/ThumbsUp,//g' src/pages/CommunityForum.tsx
sed -i 's/Reply,//g' src/pages/CommunityForum.tsx
sed -i 's/Edit,//g' src/pages/CommunityForum.tsx
sed -i 's/Trash2,//g' src/pages/CommunityForum.tsx
sed -i 's/Globe,//g' src/pages/CommunityForum.tsx
sed -i 's/const \[showNewPost, setShowNewPost\] = useState(false);/const \[showNewPost\] = useState(false);/g' src/pages/CommunityForum.tsx

# MessagingSystem.tsx
sed -i 's/import React, { useState } from '\''react'\'';/import { useState } from '\''react'\'';/g' src/pages/MessagingSystem.tsx
sed -i 's/Archive,//g' src/pages/MessagingSystem.tsx
sed -i 's/Trash2,//g' src/pages/MessagingSystem.tsx
sed -i 's/Clock,//g' src/pages/MessagingSystem.tsx

# MobileAppMockup.tsx
sed -i 's/import React, { useState } from '\''react'\'';/import { useState } from '\''react'\'';/g' src/pages/MobileAppMockup.tsx
sed -i 's/Settings,//g' src/pages/MobileAppMockup.tsx
sed -i 's/Users,//g' src/pages/MobileAppMockup.tsx
sed -i 's/Share2,//g' src/pages/MobileAppMockup.tsx
sed -i 's/Filter,//g' src/pages/MobileAppMockup.tsx
sed -i 's/ChevronLeft,//g' src/pages/MobileAppMockup.tsx
sed -i 's/ChevronRight,//g' src/pages/MobileAppMockup.tsx
sed -i 's/Play,//g' src/pages/MobileAppMockup.tsx
sed -i 's/Pause,//g' src/pages/MobileAppMockup.tsx
sed -i 's/Volume2,//g' src/pages/MobileAppMockup.tsx
sed -i 's/VolumeX,//g' src/pages/MobileAppMockup.tsx
sed -i 's/const \[selectedArtwork, setSelectedArtwork\] = useState<MobileArtwork | null>(null);/const \[selectedArtwork\] = useState<MobileArtwork | null>(null);/g' src/pages/MobileAppMockup.tsx

# PaymentSystem.tsx
sed -i 's/Zap,//g' src/pages/PaymentSystem.tsx
sed -i 's/Users,//g' src/pages/PaymentSystem.tsx
sed -i 's/Award,//g' src/pages/PaymentSystem.tsx
sed -i 's/const \[selectedTier, setSelectedTier\] = useState<string>('\''artist-pro'\'');/const \[selectedTier\] = useState<string>('\''artist-pro'\'');/g' src/pages/PaymentSystem.tsx

# PublicGallery.tsx
sed -i 's/import React, { useState } from '\''react'\'';/import { useState } from '\''react'\'';/g' src/pages/PublicGallery.tsx
sed -i 's/Filter,//g' src/pages/PublicGallery.tsx
sed -i 's/Award,//g' src/pages/PublicGallery.tsx

echo "Fixed all unused imports!"
