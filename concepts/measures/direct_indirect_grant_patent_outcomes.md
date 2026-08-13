# Direct and indirect grant-patent outcomes

## Summary

Direct and indirect grant-patent outcomes measure whether funded research is linked to patents either through explicit grant acknowledgments or through patents citing grant-supported publications.

## Canonical Form

- Unit of analysis: grant, patent, grant-supported publication, patent citation, federal-support acknowledgment, or output window.
- Typical representation: direct patent count, indirect patent count, or binary downstream patent indicator by grant.
- Measurement target: technological or commercial trace of funded research.
- Empirical signature: proposal scores, funding programs, or grant features predict later direct and indirect patent links.

## Uses in Science of Science

- Adds a downstream technology outcome to [grant peer-review value-added](../validations/grant_peer_review_value_added.md).
- Bridges [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md) with [patent-paper links](../datasets/patent_paper_links.md).
- Separates direct grant-to-patent support claims from indirect publication-to-patent knowledge links.
- Complements [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md) and fresh [Dimensions](../datasets/dimensions.md) grant-patent context data.

## Operationalization

- Identify direct patents that acknowledge federal support from a focal grant or project.
- Link grants to supported publications through publication acknowledgments.
- Match supported publications to USPTO or other patent references to count indirect patents.
- Keep direct and indirect outcomes separate, and record whether patent assignees differ from funded investigators or institutions.
- Report lag windows because patenting can occur long after publication or grant approval.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) tracks direct patents that explicitly acknowledge NIH funding and indirect patents that cite publications acknowledging grant support.
- The paper constructs indirect patent outcomes by linking grants to publications through acknowledgment data and then using fuzzy matching to identify publications cited by USPTO patents.
- Li and Agha note that this method captures patents even when they are not assigned to the NIH-funded investigator; the text reports that such patents are most often held by private firms.
- The paper reports that a one-standard-deviation worse percentile score predicts a 14% decrease in both direct and indirect patenting.
- Li and Agha caution that long and heterogeneous patent lags likely make their commercialization estimates downward biased.
- The narrower validation motif [grant-patent lag truncation bias](../validations/grant_patent_lag_truncation_bias.md) records this right-censoring caveat separately from the direct and indirect outcome definitions.

## Caveats

- Patents are partial, delayed, and field-dependent traces of practical use.
- Direct grant acknowledgments and publication-to-patent citations reflect different mechanisms and should not be collapsed without flags.
- Fuzzy matching and patent citation practices can introduce false positives, missed links, and assignee-selection bias.

## Links

- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [grant-patent lag truncation bias](../validations/grant_patent_lag_truncation_bias.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [patent paper links](../datasets/patent_paper_links.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [Dimensions](../datasets/dimensions.md)
- [responsible metrics](responsible_metrics.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `direct_indirect_grant_patent_outcomes`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: direct grant patents; indirect grant patents; grant-linked patent outcomes; grant-to-patent downstream traces
