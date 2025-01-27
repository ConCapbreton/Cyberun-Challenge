import { Layout,  theme } from 'antd';
import { GithubFilled } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
import Drawer from "./Drawer"
import schema from '../schema/schema.json'
import uischema from '../uischema/uischema.json'
import secondSchema from '../schema/secondSchema.json'
import secondUISchema from '../uischema/secondUIschema.json'

const initialData = {
  "provideAddress": true,
  "vegetarian": false
};

const LayoutComp: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
    return (
    <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{color: "white"}}>Cyberun challenge</h1>
        </Header>
        <Content style={{ padding: '0 48px' }}>
        <Layout
            style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
            <Sider style={{ background: colorBgContainer, }} width={400}>
                <h2>Click to open forms:</h2>
                <Drawer title="BASIC INFORMATION" schema={schema} uischema={uischema} initialData={initialData}/> 
                <Drawer title="SECOND FORM" schema={secondSchema} uischema={secondUISchema} initialData={initialData}/> 
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 300 }}></Content>
        </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            <p>©{new Date().getFullYear()} created by Martin Connor Sexton</p>
            <a href="https://github.com/ConCapbreton/Cyberun-Challenge" target="_blank"><GithubFilled /> Link to Github repository</a>
        </Footer>
    </Layout>
);
}

export default LayoutComp;