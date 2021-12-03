import React from 'react'
import PostCard from '../../components/PostCard'
import { usePost } from '../../utils/PostContext'

import {
  Row,
  Col,
  Container
} from "reactstrap";

function Profile() {
  const { posts } = usePost()

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="mb-3">Profile</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card-columns">
            {posts.ownedPosts.map((post) => (
              <PostCard key={post._id} post={post} editable={true} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
