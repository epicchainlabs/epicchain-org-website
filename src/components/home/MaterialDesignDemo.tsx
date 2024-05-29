import * as React from 'react';
import MuiChip from '@mui/material/Chip';
import MuiCardMedia from '@mui/material/CardMedia';
import MuiCard, { CardProps } from '@mui/material/Card';
import MuiSwitch from '@mui/material/Switch';
import MuiTypography from '@mui/material/Typography';
import MuiStack from '@mui/material/Stack';
import MuiRating from '@mui/material/Rating';
import { withPointer } from 'docs/src/components/home/ElementPointer';

export const componentCode = `
using System;
using System.Threading.Tasks;
using EpicChain.SDK;
using EpicChain.SDK.Transactions;

namespace QuantumGuardNexus
{
    public class QuantumGuardNexusContract
    {
        private EpicChainClient client;

        public QuantumGuardNexusContract(string rpcUrl, string accountAddress, string privateKey)
        {
            client = new EpicChainClient(rpcUrl, accountAddress, privateKey);
        }

        public async Task RegisterAssetAsync(string assetId, string ownerAddress)
        {
            var transaction = new { AssetId = assetId, Owner = ownerAddress };
            var receipt = await client.SendTransactionAsync("YOUR_CONTRACT_ADDRESS", transaction);
            Console.WriteLine("Asset Registered: " + receipt.TransactionHash);
        }

        public async Task TransferOwnershipAsync(string assetId, string newOwnerAddress)
        {
            var transaction = new { AssetId = assetId, NewOwner = newOwnerAddress };
            var receipt = await client.SendTransactionAsync("YOUR_CONTRACT_ADDRESS", transaction);
            Console.WriteLine("Ownership Transferred: " + receipt.TransactionHash);
        }

        public async Task VerifyOwnershipAsync(string assetId)
        {
            var query = new { AssetId = assetId };
            var ownerAddress = await client.QueryAsync<string>("YOUR_CONTRACT_ADDRESS", "verifyOwnership", query);
            Console.WriteLine("Current Owner: " + ownerAddress);
        }
    }

    class Program
    {
        static async Task Main(string[] args)
        {
            var contract = new QuantumGuardNexusContract("https://api.epicchain.org", "YOUR_ACCOUNT_ADDRESS", "YOUR_PRIVATE_KEY");

            string assetId = "ASSET123";
            string ownerAddress = "0x1234567890abcdef1234567890abcdef12345678";
            string newOwnerAddress = "0xabcdef1234567890abcdef1234567890abcdef12";

            await contract.RegisterAssetAsync(assetId, ownerAddress);
            await contract.VerifyOwnershipAsync(assetId);
            await contract.TransferOwnershipAsync(assetId, newOwnerAddress);
            await contract.VerifyOwnershipAsync(assetId);
        }
    }
}

`;

const Card = withPointer(MuiCard, { id: 'card', name: 'Card' });
const CardMedia = withPointer(MuiCardMedia, { id: 'cardmedia', name: 'CardMedia' });
const Stack = withPointer(MuiStack, { id: 'stack', name: 'Stack' });
const Stack2 = withPointer(MuiStack, { id: 'stack2', name: 'Stack' });
const Stack3 = withPointer(MuiStack, { id: 'stack3', name: 'Stack' });
const Typography = withPointer(MuiTypography, { id: 'typography', name: 'Typography' });
const Chip = withPointer(MuiChip, { id: 'chip', name: 'Chip' });
const Rating = withPointer(MuiRating, { id: 'rating', name: 'Rating' });
const Switch = withPointer(MuiSwitch, { id: 'switch', name: 'Switch' });

export default function MaterialDesignDemo(props: CardProps) {
  const [active, setActive] = React.useState(true);
  return (
    <Card>
    </Card>
  );
}
