# Unique-coauthor-count matching robustness

## Summary

Unique-coauthor-count matching robustness checks whether an early collaboration-exposure result survives after matching or controlling for the breadth of a junior scientist's early collaboration network.

## Canonical Form

- Unit of analysis: scientist, early-career publication portfolio, coauthor count, matched pair, or later career outcome.
- Typical representation: matched-pair robustness table with unique early coauthors added as an extra covariate.
- Validation target: separate exposure to a top coauthor from general early network size or collaboration intensity.
- Empirical signature: treated-control differences remain qualitatively similar after balancing the number of unique early coauthors.

## Uses in Science of Science

- Strengthens [matched career counterfactuals](../methods/matched_career_counterfactuals.md) when collaboration-network size could confound a treatment definition.
- Clarifies [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md): an early top coauthor should not be mistaken for simply having more coauthors.
- Complements [repeated top-coauthor access](../mechanisms/repeated_top_coauthor_access.md) by distinguishing later elite-network access from baseline early network breadth.

## Operationalization

- Count unique coauthors on publications in the early-career window.
- Add early unique-coauthor count to propensity-score matching, exact matching, regression controls, or balance diagnostics.
- Re-estimate downstream citation, citation-per-paper, elite-access, and top-status outcomes.
- Compare balance and result stability with the baseline matching specification.
- Report cases where adding network breadth reduces significance or changes the substantive interpretation.

## Evidence and Validations

- Verified full-text evidence from Li et al. (2019) reports an additional matched-pair robustness analysis that includes the number of unique coauthors during the first three career years as an added covariate.
- The authors state that results are qualitatively unchanged for the most part after adding this covariate, though statistical significance is reduced in Chemistry and Neuroscience.
- This makes early network breadth an explicit robustness dimension rather than an unexamined alternative explanation.

## Caveats

- Unique coauthor count is a coarse network-size measure; it does not capture tie strength, coauthor status, institutional diversity, or team roles.
- Reduced significance in some fields should be reported rather than hidden.
- Network size can be both a confounder and an early-career outcome of lab placement or institutional access.

## Links

- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [repeated top-coauthor access](../mechanisms/repeated_top_coauthor_access.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [top scientist selection confound](top_scientist_selection_confound.md)
- [five-year early-career window sensitivity](five_year_early_career_window_sensitivity.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `unique_coauthor_count_matching_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: early coauthor-count robustness; network-breadth matching check; unique collaborator covariate; collaboration breadth robustness
