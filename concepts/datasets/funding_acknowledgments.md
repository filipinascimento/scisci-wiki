# Funding acknowledgments and grant links

## Summary

Funding acknowledgments and grant links connect research outputs to funders, grant awards, programs, and acknowledgment text.

## Canonical Form

- Unit of analysis: paper, acknowledgment span, grant, funder, program, institution, or investigator.
- Typical representation: paper-funder/grant bipartite links plus text-derived evidence.
- Mechanism or measurement target: funding support, portfolio effects, accountability, and research-direction shaping.
- Empirical signature: standardized grant IDs, funder names, or extracted acknowledgment mentions linked to papers.

## Uses in Science of Science

- Used to study funding effects, grant portfolios, team formation, innovation, and institutional strategy.
- Provides a key layer in multiplex scholarly graphs.
- Local Dimensions data can provide publication-grant context where available.
- When award or project IDs are available, [grant-publication linkage tables](grant_publication_linkage_tables.md) preserve a more explicit relation than free-text funder acknowledgments alone.
- Downstream mechanism pages can use this layer to test [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md), although acknowledgment links alone are not causal treatment assignment.
- Analyses that use Web of Science funding fields should audit [WOS funding-acknowledgment onset bias](../validations/wos_funding_acknowledgment_onset_bias.md) before treating missing values as unfunded papers.

## Operationalization

- Extract funder names and grant IDs from acknowledgment text or database fields.
- Normalize funder names against registries and link grant IDs to award tables.
- Validate extraction with regex, dictionaries, manual samples, and database joins.
- Plot funding-field coverage by year and source so database recording changes are separated from real funding changes.

## Evidence and Validations

- Giles and Councill anchor automated acknowledgment extraction; later reviews summarize funding-acknowledgment literature.
- Verified full-text evidence from Wu et al. (2019) uses Web of Science funding acknowledgments to identify agency-funded papers, then compares funding, team size, and disruption. This makes funding acknowledgments an operational data layer for studying how support portfolios shape [team size disruption](../mechanisms/team_size_disruption.md).
- Verified full-text evidence from Li and Agha (2015) uses PubMed grant acknowledgments to link NIH R01 grants to publications within an output window, making [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md) a central method for validating grant review.

## Caveats

- Acknowledgments are incomplete and differ by field, funder, and period.
- Web of Science funding records have a known onset/coverage jump, so pre-onset missingness should be treated as unknown rather than unfunded.
- Funding acknowledgment does not by itself identify causal funding effects.

## Links

- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md)
- [grant-publication linkage tables](grant_publication_linkage_tables.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [NIH IMPAC R01 grant panel](nih_impac_r01_grant_panel.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [dimensions](dimensions.md)
- [web of science](web_of_science.md)
- [disruption index](../measures/disruption_index.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [patent paper links](patent_paper_links.md)
- [peer review gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [funding-award disruption contrast](../validations/funding_award_disruption_contrast.md)
- [WOS funding-acknowledgment onset bias](../validations/wos_funding_acknowledgment_onset_bias.md)

## References

- Giles, C. L., & Councill, I. G. (2004). Who gets acknowledged: Measuring scientific contributions through automatic acknowledgment indexing. *Proceedings of the National Academy of Sciences*, 101(51), 17599-17604. https://doi.org/10.1073/pnas.0407743101 [OpenAlex: W2101514744; Dimensions: pub.1051085436; WoS: unknown]
- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Alvarez-Bornstein, B., & Montesi, M. (2020). Funding acknowledgements in scientific publications: A literature review. *Research Evaluation*, 30(4), 469-488. https://doi.org/10.1093/reseval/rvaa038 [OpenAlex: unknown; Dimensions: pub.1133660575; WoS: unknown]

## Metadata

- Concept ID: `funding_acknowledgments`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Giles and Councill (2004) (2004)
- Latest seen paper: Alvarez-Bornstein and Montesi (2020) (2020)
- Primary reference DOI: `10.1073/pnas.0407743101`
- OpenAlex ID: `W2101514744`
- Aliases: grant links; funding acknowledgments; funder metadata
