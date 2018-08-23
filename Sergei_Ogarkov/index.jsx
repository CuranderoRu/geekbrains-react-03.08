import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Alert, Badge } from 'reactstrap';

import Navi from './components/Navi';
import SideNav from './components/SideNav';
import Wrapper from './components/Wrapper';
import ArticlesList from './components/ArticlesList';

import CommentsList from 'components/CommentsList';
import CommentsForm from 'components/CommentsForm';

const menuItems = [
    {
        label: 'Sport',
        href: '/sport'
    },
    {
        label: 'News',
        href: '/new'
    },
    {
        label: 'Fasion',
        href: '/fasion'
    },
];


const sideNavItems = [
    {
        label: 'Recent',
        href: '/recent'
    },
    {
        label: 'Friends',
        href: '/friends'
    },
    {
        label: 'Recommended',
        href: '/recommended'
    },
];

const articles = [
    {
        article_id: 1,
        title: 'Article 1',
        subtitle: 'This is sample article 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ut blanditiis sunt dolor illum...'
    },
    {
        article_id: 2,
        title: 'Article 2',
        subtitle: 'This is sample article 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ut blanditiis sunt dolor illum...'
    }

];


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            comments: [],
        }
    }

    handleSubmit = (comment) => {
        const {comments} = this.state;

        this.setState({
            comments: comments.concat([comment]),
        })
    };

    render() {
        const {comments} = this.state;

        return (
            <div>
                <Wrapper>
                    <Navi  items={menuItems}/>
                    <Alert color="light">

                    </Alert>
                    <Row>
                        <Col xs="10">Articles
                            <ArticlesList articles={articles}/>
                            <CommentsForm onSubmit={this.handleSubmit}/>
                            <CommentsList comments={comments}/>
                        </Col>
                        <Col xs="2"><SideNav  items={sideNavItems}/></Col>
                    </Row>
                </Wrapper>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));