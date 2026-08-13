# Rare-name applicant match robustness

## Summary

Rare-name applicant match robustness restricts analyses to applicants with uncommon name keys to test whether author-name matching errors drive bibliometric controls or outcomes.

## Canonical Form

- Unit of analysis: applicant, name key, publication match, prior-output control, outcome model, or robustness subsample.
- Typical representation: main model re-estimated on rare-name investigators whose publications are less likely to be confused with namesakes.
- Validation target: evaluate whether author disambiguation error changes the estimated relationship between review scores and outcomes.
- Empirical signature: coefficients remain similar in the rare-name subsample despite lower ambiguity in publication-history matching.

## Uses in Science of Science

- Validates [conservative applicant publication matching bias](conservative_applicant_publication_matching_bias.md) and [applicant bibliometric control vector](../methods/applicant_bibliometric_control_vector.md).
- Connects [author name disambiguation](../methods/author_name_disambiguation.md) to grant-review and career-outcome studies.
- Complements [applicant prestige-residualization stack](applicant_prestige_residualization_stack.md) when prior publication controls rely on name-based matching.

## Operationalization

- Construct a name commonness or ambiguity score using surname, initials, full name, institution, or external author identifiers.
- Define a rare-name subsample with lower expected false-positive publication matches.
- Rebuild applicant prior-output controls and post-award outcomes within that subsample.
- Compare review-score or funding-effect coefficients with the full-sample estimates.
- Report the tradeoff between lower matching error and reduced representativeness.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) uses a rare-name investigator check to evaluate whether name-based publication matching errors affect the NIH peer-review score gradient.
- The paper applies this robustness test because publication-history controls and broader PI-authored outcomes can be biased when common names are mismatched.
- Li and Agha report that the peer-review predictive-validity pattern is not explained away by restricting to less ambiguous applicant names.

## Caveats

- Rare-name samples may differ by ethnicity, nationality, gender, field, or career cohort.
- Rare names do not eliminate institutional moves, name changes, initials-only records, or homonyms.
- The check is a robustness diagnostic, not a replacement for high-quality author disambiguation.

## Links

- [conservative applicant publication matching bias](conservative_applicant_publication_matching_bias.md)
- [applicant bibliometric control vector](../methods/applicant_bibliometric_control_vector.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [applicant prestige-residualization stack](applicant_prestige_residualization_stack.md)
- [PI-authored publication linkage robustness](pi_authored_publication_linkage_robustness.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; SciSciNet: W1975626251; WoS: unknown]

## Metadata

- Concept ID: `rare_name_applicant_match_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: rare-name robustness; applicant-name ambiguity check; author-match rare-name restriction; publication-history match validation
