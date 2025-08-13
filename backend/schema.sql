CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    photo TEXT,
    bio TEXT,
    skills TEXT,
    neighborhood_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    requester_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    urgency VARCHAR(255),
    status VARCHAR(255) DEFAULT 'Open',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE task_offers (
    id SERIAL PRIMARY KEY,
    task_id INTEGER REFERENCES tasks(id),
    helper_id INTEGER REFERENCES users(id),
    status VARCHAR(255) DEFAULT 'Offered',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE community_credits (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    balance INTEGER DEFAULT 10,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    task_id INTEGER REFERENCES tasks(id),
    sender_id INTEGER REFERENCES users(id),
    receiver_id INTEGER REFERENCES users(id),
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    task_id INTEGER REFERENCES tasks(id),
    rater_id INTEGER REFERENCES users(id),
    rated_id INTEGER REFERENCES users(id),
    rating INTEGER,
    review TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
