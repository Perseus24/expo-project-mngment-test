// src/database/index.ts
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import schema from './schema'
import Project from './models/Project'

const adapter = new SQLiteAdapter({
    schema,
    jsi: true, // Only enable this once you've confirmed the basic setup works
})

export const database = new Database({
    adapter,
    modelClasses: [
        Project, // Add all your models here
    ],
})