import React from 'react';
import ReactDOM from 'react-dom';
import {   Wrapper} from "./component";
import {
     Container ,
     Grid50,
     Grid25,
     Grid75,
     FullWidth

} from './component/layout'
import { Card } from "./component/cards";
import {
     H1,
     H2 ,
     H3,
     H4,
     H5,
     H6,
     Code,
     XLT,
     LT,
     MT,
     ST,
     P
    } from "./component/text";



class App extends React.Component {

    render() {
        return (
            <Wrapper >
                <Container>
                    <XLT align={'center'} >This is <Code>&lt;XLT/&gt;</Code>  Extra Large Title </XLT>
                    <LT align={'center'} >This is <Code>&lt;LT/&gt;</Code> Large Title </LT>
                    <MT  >This is <Code>&lt;MT/&gt;</Code> Medium Title! This Time centre is False  </MT>
                    <ST align={'center'} >This is <Code>&lt;ST/&gt;</Code> Small Title </ST>
                    <H1 align={'center'}>&lt;h1&gt; tag as <Code> &lt;H1 /&gt; </Code></H1>
                    <div>
                        <Grid50 bgColor={'white'}>

                            <P>
                            This is
                                <Code>
                                  &lt;Grid50/&gt;
                                </Code>Grid Layout Component With
                                <Code>
                                    &lt;Card/&gt;
                                </Code>
                            Card area
                        </P>

                        </Grid50>
                        <Grid50 bgColor={'grey'}>

                                <P color={'white'}>
                                    This is
                                        <Code>
                                          &lt;Grid50/&gt;
                                        </Code>
                                    Grid Layout Component With
                                        <Code>
                                            &lt;Card/&gt;
                                        </Code>
                                    Card area
                                </P>

                        </Grid50>
                        <Grid50>
                            <Grid50 bgColor={'grey'}>
                                <P color={'white'}>THis is
                                    <Code>
                                        &lt;Grid50/&gt;
                                    </Code>
                                    half color:'white'</P>
                            </Grid50>
                            <Grid50 bgColor={'white'}>
                                <P color={'black'}>THis is
                                <Code>
                                    &lt;Grid50/&gt;
                                </Code>
                                half color:'black'</P>
                            </Grid50>
                        </Grid50>
                        <Grid50>
                            <Grid25 bgColor={'grey'}>
                                <P color={'white'}>THis is
                                <br/>
                                <Code>
                                    &lt;Grid25/&gt;
                                </Code>
                                </P>
                            </Grid25>
                            <Grid75 bgColor={'white'}>
                                <P color={'black'}>THis is
                                <br/>
                                    <Code>
                                        &lt;Grid75/&gt;
                                    </Code>
                                </P>
                            </Grid75>
                        </Grid50>
                        <FullWidth>
                            <Grid75 bgColor={'#49494a'}>
                                <Grid25 bgColor={'grey'}>
                                    <P align={'center'}>
                                    <Code>
                                        &lt;Grid25/&gt;
                                    </Code>s
                                    </P>
                                </Grid25>
                                <Grid25 bgColor={'white'}>
                                    <P align={'center'} fntSz={'1.2em'} fntWt={'600'}>
                                       inside
                                    </P>
                                </Grid25>
                                <Grid25 bgColor={'grey'}>
                                    <P align={'center'}>
                                    <Code>
                                      &lt;Grid75/&gt;
                                    </Code>
                                    </P>
                                </Grid25>

                            </Grid75>
                            <Grid25 bgColor={'grey'}>
                                    <P>25 </P>
                            </Grid25>
                        </FullWidth>
                        <FullWidth>
                                <Grid25 bgColor={'grey'}>
                                    <P>25 </P>
                                </Grid25>
                                <Grid25 bgColor={'white'}>
                                    <P>25 </P>
                                </Grid25>
                                <Grid25 bgColor={'grey'}>
                                    <P>25 </P>
                                </Grid25>
                        </FullWidth>

                    </div>
                    <div>
                        <H2 align={'center'}>&lt;h2&gt; tag as <Code>&lt;H2/&gt; </Code></H2>
                        <H3 align={'center'}>&lt;h3&gt; tag as <Code>&lt;H3/&gt; </Code></H3>
                        <H4 align={'center'}>&lt;h4&gt; tag as <Code>&lt;H4/&gt; </Code></H4>
                        <H5 align={'center'}>&lt;h5&gt; tag as <Code>&lt;H5/&gt; </Code></H5>
                        <H6 align={'center'}>&lt;h6&gt; tag as <Code>&lt;H6/&gt; </Code></H6>
                    </div>
                    </Container>
            </Wrapper>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);


