# PI-authored publication linkage robustness

## Summary

PI-authored publication linkage robustness replaces grant-acknowledgment output linkage with all publications authored by the principal investigator in fixed windows to test whether acknowledgment missingness drives results.

## Canonical Form

- Unit of analysis: principal investigator, grant, publication window, author-name match, acknowledgment-linked output, or robustness coefficient.
- Typical representation: 5-year and 10-year PI-authored output windows compared with grant-acknowledged publication windows.
- Validation target: determine whether grant-outcome conclusions depend on authors correctly acknowledging the focal grant.
- Empirical signature: score, funding, or treatment gradients persist when the outcome is defined from PI-authored publications rather than acknowledgments.

## Uses in Science of Science

- Validates [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md).
- Links output-window design to [citation window selection](../methods/citation_window_selection.md), [author name disambiguation](../methods/author_name_disambiguation.md), and [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md).
- Helps separate missing acknowledgments from true absence of downstream publication output.

## Operationalization

- Build the primary grant-output set from acknowledged publications.
- Independently collect all PI-authored publications in a fixed post-award window such as 5 or 10 years.
- Apply author-name disambiguation and record conservative versus broad matching choices.
- Re-estimate the main outcome models with PI-authored outputs and compare signs, magnitudes, and significance.
- Interpret broad PI-authored windows as robustness checks, not as clean project attribution.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) tests whether the score-outcome relationship persists when outcomes are measured using all PI-authored publications in 5-year and 10-year windows.
- The paper uses this check to address the concern that lower-scored grants might simply be less likely to acknowledge NIH support in publication metadata.
- Li and Agha report that the main peer-review predictive-validity pattern remains visible under the broader PI-authored publication definition.

## Caveats

- PI-authored windows include unrelated projects and can dilute project-specific treatment or review signals.
- Name ambiguity and author disambiguation error can bias subgroup and career-stage analyses.
- Broader publication windows trade grant-attribution precision for reduced acknowledgment missingness.

## Links

- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md)
- [citation window selection](../methods/citation_window_selection.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)
- [rare-name applicant match robustness](rare_name_applicant_match_robustness.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; SciSciNet: W1975626251; WoS: unknown]

## Metadata

- Concept ID: `pi_authored_publication_linkage_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: PI-authored output robustness; broad PI publication window; acknowledgment-missingness robustness; grant-output alternative linkage
