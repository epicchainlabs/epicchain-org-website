import * as React from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import Item, { Group } from 'docs/src/components/action/Item';
import Highlighter from 'docs/src/components/action/Highlighter';
import SvgMaterialDesign from 'docs/src/icons/SvgMaterialDesign';
import Frame from 'docs/src/components/action/Frame';
import PlayerCard from 'docs/src/components/showcase/PlayerCard';

const code = `
using EpicChain.SDK.Contracts;
using EpicChain.SDK.Contracts.Tokens;
using EpicChain.SDK.Storage;
using System;
using System.Collections.Generic;

public class EpicChainNFTContract : ERC721, IOwnable
{
    private ulong _nextTokenId = 0;
    private Dictionary<ulong, string> _tokenURIs;
    private string _baseURI;

    public EpicChainNFTContract(string name, string symbol, string baseURI) : base(name, symbol)
    {
        Owner = Message.Sender;
        _tokenURIs = new Dictionary<ulong, string>();
        _baseURI = baseURI;
    }

    public Address Owner { get; private set; }

    public void Mint(Address to, string tokenURI)
    {
        Require(Message.Sender == Owner, "Only owner can mint tokens");

        _nextTokenId++;
        _mint(to, _nextTokenId);
        _tokenURIs[_nextTokenId] = tokenURI;
    }

    public string TokenURI(ulong tokenId)
    {
        return _tokenURIs[tokenId];
    }

    public void TransferOwnership(Address newOwner)
    {
        Require(Message.Sender == Owner, "Only owner can transfer ownership");
        Owner = newOwner;
    }

    protected override string _baseTokenURI()
    {
        return _baseURI;
    }
}
`;

export default function MaterialTheming() {
  const [customized, setCustomized] = React.useState(true);
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid md={6} sx={{ minWidth: 0 }}>
          <SectionHeadline
            title={
              <Typography variant="h2">
                The Mint function <GradientText>is used to create </GradientText> a new NFTe
              </Typography>
            }
            description="ensuring that unauthorized parties cannot mint new tokens."
          />
          <Group sx={{ m: -2, p: 2 }}>
            <Highlighter disableBorder selected={customized} onClick={() => setCustomized(true)}>
              <Item
                icon={<AutoAwesomeRounded color="warning" />}
                title="Authorization Check"
                description="The function first checks if the sender of the transaction (i.e., the caller) is the owner of the contract. This is done using the Require statement, which throws an error if the condition is not met."
              />
            </Highlighter>
            <Highlighter disableBorder selected={!customized} onClick={() => setCustomized(false)}>
              <Item
                icon={<SvgMaterialDesign />}
                title="Token ID Generation"
                description="The _nextTokenId is incremented by 1 to generate a unique ID for the new token."
              />
            </Highlighter>
          </Group>
        </Grid>
        <Grid xs={12} md={6}>
          <Frame sx={{ height: '100%' }}>
            <Frame.Demo
              sx={{
                p: 2,
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 188,
              }}
            >
              {customized ? (
                <PlayerCard />
              ) : (
                <CssVarsProvider>
                  <PlayerCard disableTheming />
                </CssVarsProvider>
              )}
            </Frame.Demo>
            <Frame.Info sx={{ maxHeight: 300, overflow: 'auto' }}>
              <HighlightedCode copyButtonHidden plainStyle code={code} language="jsx" />
            </Frame.Info>
          </Frame>
        </Grid>
      </Grid>
    </Section>
  );
}
