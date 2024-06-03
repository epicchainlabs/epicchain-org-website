import * as React from 'react';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { Switch as SwitchUnstyled } from '@mui/base/Switch';
import { useSwitch, UseSwitchParameters } from '@mui/base/useSwitch';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import SvgTwinkle from 'docs/src/icons/SvgTwinkle';
import Section from 'docs/src/layouts/Section';
import Highlighter from 'docs/src/components/action/Highlighter';
import Item, { Group } from 'docs/src/components/action/Item';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import FlashCode from 'docs/src/components/animation/FlashCode';
import Frame from 'docs/src/components/action/Frame';

const code = `
using System;
using System.Collections.Generic;
using System.Linq;

public class Proposal
{
    public int Id { get; set; }
    public string Description { get; set; }
    public bool Executed { get; set; }
    public int ForVotes { get; set; }
    public int AgainstVotes { get; set; }
    public Dictionary<string, bool> Votes { get; set; }
}

public class Governance
{
    private List<Proposal> _proposals;
    private Dictionary<string, int> _balances;

    public Governance()
    {
        _proposals = new List<Proposal>();
        _balances = new Dictionary<string, int>();
    }

    public void CreateProposal(string description)
    {
        int id = _proposals.Count + 1;
        _proposals.Add(new Proposal { Id = id, Description = description });
    }

    public void Vote(int proposalId, string voter, bool inFavor)
    {
        Proposal proposal = _proposals.FirstOrDefault(p => p.Id == proposalId);
        if (proposal != null && !proposal.Executed && !_balances.ContainsKey(voter))
        {
            proposal.Votes[voter] = inFavor;
            if (inFavor)
            {
                proposal.ForVotes++;
            }
            else
            {
                proposal.AgainstVotes++;
            }
        }
    }

    public void ExecuteProposal(int proposalId)
    {
        Proposal proposal = _proposals.FirstOrDefault(p => p.Id == proposalId);
        if (proposal != null && !proposal.Executed && proposal.ForVotes > proposal.AgainstVotes)
        {
            // Execute the proposal (e.g., update the contract state, allocate funds, etc.)
            proposal.Executed = true;
        }
    }
}

public class Program
{
    public static void Main()
    {
        Governance governance = new Governance();
        governance.CreateProposal("Allocate funds for project X");
        governance.CreateProposal("Update protocol to version 2.0");

        // Simulate voting
        governance.Vote(1, "Alice", true);
        governance.Vote(1, "Bob", false);
        governance.Vote(2, "Alice", true);
        governance.Vote(2, "Bob", true);

        // Execute the winning proposal
        governance.ExecuteProposal(2);
    }
}

`;

const startLine = [6, 89, 64];
const endLine = [26, 93, 84];
const scrollTo = [0, 1400, 1140];

const StyledSwitchRoot = styled('span')(`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin: 10px;
  cursor: pointer;
  border-radius: 16px;
  background: #B0B8C4;
  transition: all ease 120ms;

  :hover {
    background: #9DA8B7;
  }

  &.Mui-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.Mui-checked {
    background: #007FFF;
    :hover {
      background: #0072E5;
    }
    & .MuiSwitch-thumb {
      left: 20px;
    }
  }

  &.Mui-focusVisible {
    outline: 4px solid rgba(0, 127, 255, 0.4);
  }

  :where([data-mui-color-scheme='dark']) & {
    background: #6B7A90;
  
    :hover {
      background: #434D5B;
    }
  }
`);

const StyledSwitchInput = styled('input')`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`;

const StyledSwitchThumb = styled('span')`
  display: block;
  width: 16px;
  height: 16px;
  top: 4px;
  left: 4px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &.Mui-checked {
    left: 20px;
  }
`;

function SwitchFromHook(props: UseSwitchParameters) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    'Mui-checked': checked,
    'Mui-disabled': disabled,
    'Mui-focusVisible': focusVisible,
  };

  return (
    <StyledSwitchRoot className={clsx(stateClasses)}>
      <StyledSwitchThumb className={clsx(stateClasses)} />
      <StyledSwitchInput {...getInputProps()} aria-label="Demo switch" />
    </StyledSwitchRoot>
  );
}

export default function BaseUICustomization() {
  const [index, setIndex] = React.useState(0);
  const infoRef = React.useRef<HTMLDivElement | null>(null);
  function getSelectedProps(i: number) {
    return {
      selected: index === i,
      sx: { '& svg': { opacity: index === i ? 1 : 0.5 } },
    };
  }
  React.useEffect(() => {
    if (infoRef.current) {
      infoRef.current.scroll({ top: scrollTo[index], behavior: 'smooth' });
    }
  }, [index]);
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item md={6} sx={{ minWidth: 0 }}>
          <SectionHeadline
            title={
              <Typography variant="h2">
                <GradientText>EpicChain Governance </GradientText>
                <br /> Functionality
              </Typography>
            }
            description="EpicChain's governance functionality encompasses a range of features and processes designed to enable decentralized decision-making within the ecosystem."/>
          <Group sx={{ m: -2, p: 2 }}>
            <Highlighter disableBorder {...getSelectedProps(0)} onClick={() => setIndex(0)}>
              <Item
                icon={<SvgTwinkle />}
                title="Governance Council"
                description="A governance council or similar body may be established to oversee the governance process, ensure compliance with regulations, and provide strategic guidance."
              />
            </Highlighter>
            <Highlighter disableBorder {...getSelectedProps(1)} onClick={() => setIndex(1)}>
              <Item
                icon={<SvgTwinkle />}
                title="Governance Proposals"
                description="The council or a designated committee reviews proposals to ensure they comply with governance rules and are technically feasible."  />
            </Highlighter>
            <Highlighter disableBorder {...getSelectedProps(2)} onClick={() => setIndex(2)}>
              <Item
                icon={<SvgTwinkle />}
                title="Amendment Process"
                description="The governance framework itself can be updated and amended through a defined process to adapt to changing needs and circumstances."
              />
            </Highlighter>
          </Group>
        </Grid>
        <Grid item xs={12} md={6}>
          <Frame sx={{ height: '100%' }}>
            <Frame.Demo
              sx={(theme) => ({
                overflow: 'auto',
                flexGrow: 1,
                height: '140px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: '100%, 72px',
                background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
                ...theme.applyDarkStyles({
                  backgroundSize: '72px, 100%',
                  background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
                }),
              })}
            >
              <SwitchUnstyled
                slots={{
                  root: StyledSwitchRoot,
                  input: StyledSwitchInput,
                  thumb: StyledSwitchThumb,
                }}
                slotProps={{
                  input: { 'aria-label': 'Demo switch' },
                }}
              />
              <SwitchFromHook defaultChecked />
            </Frame.Demo>
            <Frame.Info
              ref={infoRef}
              sx={{
                maxHeight: 450,
                position: 'relative',
                overflow: 'auto',
              }}
            >
              <HighlightedCode copyButtonHidden plainStyle code={code} language="jsx" />
              <FlashCode startLine={startLine[index]} endLine={endLine[index]} sx={{ mx: 1 }} />
            </Frame.Info>
          </Frame>
        </Grid>
      </Grid>
    </Section>
  );
}
