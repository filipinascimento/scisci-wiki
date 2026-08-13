# Nobel top-k credit match protocol

## Summary

Nobel top-k credit match protocol validates a credit-allocation method by checking whether the top-k inferred credit-share authors match the k Nobel-recognized laureates for a prize-winning paper.

## Canonical Form

- Unit of analysis: Nobel-winning paper, laureate set, author list, credit-share rank, or validation outcome.
- Typical representation: top-k match between inferred credit ranks and external laureate recognition.
- Validation target: evaluate whether a credit-allocation method recovers recognized discovery contributors when multiple laureates share a paper.
- Empirical signature: the highest inferred credit shares correspond to the laureates independent of author-list position.

## Uses in Science of Science

- Provides the scoring protocol within [Nobel-prize credit validation](nobel_prize_credit_validation.md).
- Links external recognition to [collective credit allocation](../measures/collective_credit_allocation.md) and [Nobel-prize credit canonization](../mechanisms/nobel_prize_credit_canonization.md).
- Helps evaluate credit metrics for multi-laureate and many-author papers.

## Operationalization

- Collect Nobel-recognized papers where the prize explanation identifies relevant publications.
- Count the number of laureates associated with the focal paper.
- Rank all coauthors by inferred credit share.
- Score a match when the top-k inferred authors include the k laureates.
- Report mismatches and inspect whether author order, bridging, or database coverage explains them.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) applies credit allocation to multi-author Nobel-winning papers in physics, chemistry, and medicine.
- The paper marks laureates and checks whether authors with top credit shares correspond to those laureates.
- Shen and Barabasi report that top-credit authors correspond to laureates in 51 of 63 prize-winning papers.

## Caveats

- Nobel prizes are selective, delayed, and limited to a small number of laureates.
- Nobel recognition is an external validation signal, not a complete ground truth for all contributors.
- The protocol excludes single-author cases where credit is trivial and may underrepresent fields without Nobel prizes.

## Links

- [Nobel-prize credit validation](nobel_prize_credit_validation.md)
- [Nobel-prize credit canonization](../mechanisms/nobel_prize_credit_canonization.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [bridge-coauthor credit anomaly](bridge_coauthor_credit_anomaly.md)
- [credit-share evolution](../measures/credit_share_evolution.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; SciSciNet: W2037997493; WoS: unknown]

## Metadata

- Concept ID: `nobel_top_k_credit_match_protocol`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: top-k Nobel credit validation; laureate top-credit match; Nobel credit rank protocol; multi-laureate credit validation
