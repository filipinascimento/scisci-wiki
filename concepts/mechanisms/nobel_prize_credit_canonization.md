# Nobel-prize credit canonization

## Summary

Nobel-prize credit canonization describes how prize recognition can reshape later citation patterns and increase laureates' inferred credit relative to coauthors.

## Canonical Form

- Unit of analysis: prize-winning paper, laureate, coauthor, award year, credit share, or citation neighborhood.
- Typical representation: before-after credit-share ratio around a prize event.
- Mechanism: awards can canonize who should receive credit, causing later citation behavior to reinforce the recognized contributor.
- Empirical signature: laureates' post-award credit shares rise relative to pre-award shares.

## Uses in Science of Science

- Adds a cumulative-advantage mechanism to [credit-share evolution](../measures/credit_share_evolution.md).
- Connects [Nobel-prize credit validation](../validations/nobel_prize_credit_validation.md) to [Matthew effect](matthew_effect.md) and [reputation effects](reputation_effects.md).
- Helps interpret prize-linked validation sets as moving targets rather than static ground truth.
- Supports [responsible metrics](../measures/responsible_metrics.md) by warning that external honors can alter the traces later used to validate credit.

## Operationalization

- Estimate credit shares for laureates and coauthors before and after an award year.
- Compute a post/pre credit-share ratio for each laureate.
- Compare effects across fields, prizes, and publication histories.
- Distinguish prize-induced citation changes from preexisting credit trends where possible.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) studies whether Nobel prizes affect laureates' credit shares relative to their coauthors.
- The paper reports an example where W. D. Phillips's credit share jumps after the prize year.
- Shen and Barabasi calculate average credit share over three years before and three years after the award year, using the ratio of post-award to pre-award credit share.
- The full text reports that for most Nobel laureates the prize improves credit share relative to coauthors, with the strongest effect in Physics and weakest in Medicine.
- Shen and Barabasi interpret the effect as canonizing credit and altering subsequent citation patterns in a rich-get-richer process.

## Caveats

- Prize effects can reflect both recognition and prior credit trends.
- Nobel prizes are rare, elite, and field-limited; the mechanism may differ for other awards.
- Canonization can amplify historical exclusions and fixed-slot award limits.

## Links

- [credit-share evolution](../measures/credit_share_evolution.md)
- [Nobel-prize credit validation](../validations/nobel_prize_credit_validation.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [Matthew effect](matthew_effect.md)
- [reputation effects](reputation_effects.md)
- [fixed-slot award exclusion](fixed_slot_award_exclusion.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]

## Metadata

- Concept ID: `nobel_prize_credit_canonization`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: prize credit canonization; Nobel credit boost; award-induced credit shift; prize-driven citation reinforcement
