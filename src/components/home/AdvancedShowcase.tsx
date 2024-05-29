import * as React from 'react';
import { DataGrid, GridCellParams, GridRenderEditCellParams, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ShowcaseContainer from 'docs/src/components/home/ShowcaseContainer';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import XGridGlobalStyles from 'docs/src/components/home/XGridGlobalStyles';
import ProgressBar from 'docs/src/components/x-grid/ProgressBar';
import EditProgress from 'docs/src/components/x-grid/EditProgress';
import Status from 'docs/src/components/x-grid/Status';
import EditStatus from 'docs/src/components/x-grid/EditStatus';

const columns: Array<GridColDef> = [
  {
    field: 'desk',
    headerName: 'desk',
    width: 72,
    sortable: false,
    editable: true,
  },
  { field: 'commodity', headerName: 'Commodity', width: 132, editable: true },
  { field: 'traderName', headerName: 'Trader Name', width: 143, editable: true },
  {
    field: 'filledQuantity',
    headerName: 'Filled',
    width: 85,
    sortable: false,
    editable: true,
    renderCell: (params: GridCellParams) => {
      return <ProgressBar value={Number(params.value)!} />;
    },
    renderEditCell: (params: GridRenderEditCellParams) => {
      return <EditProgress {...params} />;
    },
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 78,
    sortable: false,
    editable: true,
    renderCell: (params: GridCellParams) => {
      return <Status status={(params.value || '').toString()} />;
    },
    renderEditCell: (params: GridRenderEditCellParams) => {
      return <EditStatus {...params} />;
    },
  },
];

const code = `extern crate epicchain_sdk;

use epicchain_sdk::{Client, Transaction, Query};
use std::error::Error;

struct QuantumVaultAssetContract {
    client: Client,
}

impl QuantumVaultAssetContract {
    pub fn new(rpc_url: &str, account_address: &str, private_key: &str) -> Result<Self, Box<dyn Error>> {
        let client = Client::new(rpc_url, account_address, private_key)?;
        Ok(Self { client })
    }

    pub async fn create_asset(&self, asset_id: &str, asset_name: &str, initial_supply: u64) -> Result<(), Box<dyn Error>> {
        let transaction = Transaction::new()
            .with_field("AssetId", asset_id)
            .with_field("AssetName", asset_name)
            .with_field("InitialSupply", &initial_supply.to_string());

        let receipt = self.client.send_transaction("YOUR_CONTRACT_ADDRESS", transaction).await?;
        println!("Asset Created: {}", receipt.transaction_hash);
        Ok(())
    }

    pub async fn deposit(&self, asset_id: &str, amount: u64) -> Result<(), Box<dyn Error>> {
        let transaction = Transaction::new()
            .with_field("AssetId", asset_id)
            .with_field("Amount", &amount.to_string());

        let receipt = self.client.send_transaction("YOUR_CONTRACT_ADDRESS", transaction).await?;
        println!("Asset Deposited: {}", receipt.transaction_hash);
        Ok(())
    }

    pub async fn withdraw(&self, asset_id: &str, amount: u64) -> Result<(), Box<dyn Error>> {
        let transaction = Transaction::new()
            .with_field("AssetId", asset_id)
            .with_field("Amount", &amount.to_string());

        let receipt = self.client.send_transaction("YOUR_CONTRACT_ADDRESS", transaction).await?;
        println!("Asset Withdrawn: {}", receipt.transaction_hash);
        Ok(())
    }

    pub async fn check_balance(&self, asset_id: &str) -> Result<(), Box<dyn Error>> {
        let query = Query::new()
            .with_field("AssetId", asset_id);

        let balance: u64 = self.client.query("YOUR_CONTRACT_ADDRESS", "checkBalance", query).await?;
        println!("Current Balance: {}", balance);
        Ok(())
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let contract = QuantumVaultAssetContract::new("https://api.epicchain.org", "YOUR_ACCOUNT_ADDRESS", "YOUR_PRIVATE_KEY")?;

    let asset_id = "ASSET123";
    let asset_name = "GoldToken";
    let initial_supply = 1000;

    contract.create_asset(asset_id, asset_name, initial_supply).await?;
    contract.deposit(asset_id, 100).await?;
    contract.check_balance(asset_id).await?;
    contract.withdraw(asset_id, 50).await?;
    contract.check_balance(asset_id).await?;

    Ok(())
}
`;

const rows = [];

export default function DataTable() {
  return (
    <ShowcaseContainer
      preview={
        <Paper
          variant="outlined"
          sx={(theme) => ({
            overflow: 'hidden',
            width: '100%',
            boxShadow: '0px 4px 16px rgba(61, 71, 82, 0.15)',
            bgcolor: '#fff',
            border: '1px solid',
            borderColor: 'grey.200',
            ...theme.applyDarkStyles({
              bgcolor: 'primaryDark.800',
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.4)',
            }),
          })}
        >
        </Paper>
      }
      code={
        <Box
          sx={{
            overflow: 'auto',
            flexGrow: 1,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '& pre': {
              bgcolor: 'transparent !important',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            },
          }}
        >
          <HighlightedCode copyButtonHidden plainStyle code={code} language="jsx" />
        </Box>
      }
    />
  );
}
