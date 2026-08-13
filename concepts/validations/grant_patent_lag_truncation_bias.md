# Grant-patent lag truncation bias

## Summary

Grant-patent lag truncation bias is the risk that grant-to-patent outcome measures understate commercial relevance because patent links can appear after long and heterogeneous delays.

## Canonical Form

- Unit of analysis: funded grant, grant-supported publication, patent, patent citation, direct grant acknowledgment, indirect patent link, or observation cutoff.
- Typical representation: patent-link count by grant, outcome cutoff year, lag distribution, right-censoring flag, or downward-bias caveat.
- Validation target: determine whether patent outcomes are mature enough to compare grants, programs, or review scores.
- Empirical signature: many grants have no observed patent links by the cutoff, but some may receive direct or indirect patent links later.

## Uses in Science of Science

- Adds a right-censoring validation layer to [direct and indirect grant-patent outcomes](../measures/direct_indirect_grant_patent_outcomes.md).
- Connects grant evaluation to [patent paper links](../datasets/patent_paper_links.md), [scientific non-patent references](../datasets/scientific_non_patent_references.md), and technology-transfer lag studies.
- Helps interpret [grant peer-review value-added](grant_peer_review_value_added.md) when commercial or technological outcomes are sparse.
- Encourages separate reporting for direct grant acknowledgments and indirect publication-to-patent citations.

## Operationalization

- Record grant approval dates, publication dates, patent application/grant dates, patent citation dates, and observation cutoff dates.
- Separate direct patents acknowledging grant support from indirect patents citing grant-supported publications.
- Estimate patent-link lag distributions where application and citation dates are available.
- Recompute score-outcome relationships under longer follow-up windows or cohort restrictions with mature patent exposure.
- Treat short-window patent nulls as censored rather than definitive absence of commercial relevance.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) measures both direct patents acknowledging NIH grant support and indirect patents citing grant-supported publications.
- The paper reports that a one-standard-deviation worse NIH percentile score predicts a 14% decrease in both direct and indirect patenting.
- Li and Agha caution that heterogeneous and potentially long lags between grants and patents mean many grants in the sample may later prove commercially relevant.
- The authors state that this time-series truncation makes value-added with respect to commercialization harder to identify and likely biases patent estimates downward.

## Caveats

- Patent links are only one commercialization trace and vary strongly by field, sector, and patenting culture.
- Direct acknowledgments and indirect publication citations measure different pathways.
- Longer follow-up can reduce censoring but increase cohort-composition and historical-policy confounds.
- Fuzzy publication-to-patent matching can add false positives and false negatives independent of lag bias.

## Links

- [direct and indirect grant-patent outcomes](../measures/direct_indirect_grant_patent_outcomes.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [patent paper links](../datasets/patent_paper_links.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent-age forward-citation control](patent_age_forward_citation_control.md)
- [science-technology lag](../measures/science_technology_lag.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `grant_patent_lag_truncation_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: grant patent right-censoring; commercialization lag truncation; patent outcome downward bias; grant-to-patent lag bias
