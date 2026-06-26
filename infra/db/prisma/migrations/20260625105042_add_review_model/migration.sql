-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "selfDescription" TEXT,
    "jobDescription" TEXT NOT NULL,
    "matchScore" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechnicalQuestion" (
    "id" SERIAL NOT NULL,
    "reviewId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "intention" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TechnicalQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BehavioralQuestion" (
    "id" SERIAL NOT NULL,
    "reviewId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "intention" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BehavioralQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillGap" (
    "id" SERIAL NOT NULL,
    "reviewId" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkillGap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreparationPlan" (
    "id" SERIAL NOT NULL,
    "reviewId" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "focus" TEXT NOT NULL,
    "tasks" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PreparationPlan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "id_index" ON "Review"("id");

-- CreateIndex
CREATE INDEX "TechnicalQuestion_id_idx" ON "TechnicalQuestion"("id");

-- CreateIndex
CREATE INDEX "BehavioralQuestion_id_idx" ON "BehavioralQuestion"("id");

-- CreateIndex
CREATE INDEX "SkillGap_id_idx" ON "SkillGap"("id");

-- CreateIndex
CREATE INDEX "PreparationPlan_id_idx" ON "PreparationPlan"("id");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicalQuestion" ADD CONSTRAINT "TechnicalQuestion_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BehavioralQuestion" ADD CONSTRAINT "BehavioralQuestion_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillGap" ADD CONSTRAINT "SkillGap_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreparationPlan" ADD CONSTRAINT "PreparationPlan_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;
