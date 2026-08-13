# Chain-Referral Attrition Bias

## Summary

Chain-referral attrition bias is the risk that long social-search chains are underobserved because messages or referrals are lost before reaching their targets.

## Canonical Form

- Unit of analysis: referral chain, path, message, participant, target, or social-search experiment.
- Typical representation: completed-chain path length distribution with missing long chains.
- Validation target: whether observed short paths are biased by attrition of longer paths.
- Empirical signature: longer chains are more likely to be dropped, forgotten, or censored.

## Uses in Science of Science

- Adds a validation caveat to [small-world collaboration structure](../representations/small_world_collaboration_structure.md).
- Contrasts chain-based path evidence with complete-graph [collaboration path length](../measures/collaboration_path_length.md).
- Helps interpret [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md).

## Operationalization

- Track initiated and completed chains separately.
- Estimate completion probability as a function of chain length.
- Compare chain-search evidence with complete network geodesics when available.
- Treat completed-chain mean length as a potentially downward-biased estimate.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) reviews Milgram's small-world experiment and notes that longer chains may have been more likely to be lost or forgotten.
- Newman contrasts this chain-based evidence with complete coauthorship-network path calculations.
- The caveat motivates using reconstructed collaboration graphs when the target is network distance rather than human routing behavior.

## Caveats

- Attrition bias applies to referral experiments, not necessarily to complete graph measurements.
- Completed chains can still reveal navigability even if they do not estimate all-pairs distances.
- Modern digital referral systems may have different attrition mechanisms.

## Links

- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [collaboration path length](../measures/collaboration_path_length.md)
- [random-graph collaboration path benchmark](random_graph_collaboration_path_benchmark.md)
- [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md)
- [publication-record network scale advantage](../methods/publication_record_network_scale_advantage.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; SciSciNet: W2125315567; WoS: unknown]

## Metadata

- Concept ID: `chain_referral_attrition_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: referral-chain censoring; Milgram chain attrition; long-chain dropout bias; social-search attrition bias
