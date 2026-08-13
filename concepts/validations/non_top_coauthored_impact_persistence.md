# Non-top-coauthored impact persistence

## Summary

Non-top-coauthored impact persistence checks whether an early elite-collaboration advantage remains visible in later work that is not coauthored with top scientists.

## Canonical Form

- Unit of analysis: scientist, later-career paper, top-coauthor flag, citation outcome, or treated-control matched pair.
- Typical representation: later citation counts or citations per paper split by whether later papers include top coauthors.
- Validation target: distinguish a direct citation boost from repeated elite coauthorship from a broader change in the junior scientist's later trajectory.
- Empirical signature: treated scientists receive more later citations even on papers without top-scientist coauthors.

## Uses in Science of Science

- Deepens [repeated top-coauthor access](../mechanisms/repeated_top_coauthor_access.md) by checking whether the observed advantage is only a later elite-collaboration artifact.
- Supports [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md) when later impact persists outside top-coauthored papers.
- Adds a direct-citation-spillover validation to [matched career counterfactuals](../methods/matched_career_counterfactuals.md).

## Operationalization

- Identify later-career papers after the early exposure window.
- Mark which later papers include top-cited scientists and which do not.
- Compute citations or normalized impact separately for later top-coauthored and non-top-coauthored papers.
- Compare exposed and unexposed junior researchers within matched or stratified designs.
- Interpret persistence on non-top-coauthored papers as evidence of broader visibility, skill, topic, network, or resource changes.

## Evidence and Validations

- Verified full-text evidence from Li et al. (2019) analyzes citations from career years 4 through 20 after separating papers with and without top-scientist coauthors.
- The paper reports that junior researchers with early top-scientist coauthorship still achieve greater impact than those without such exposure, even when focusing on later papers without top scientists as coauthors.
- The discussion highlights that junior researchers without top-decile early prestige, productivity, or citation indicators but with top-coauthor exposure continue attracting citations at a higher rate on papers not coauthored with top scientists.
- This validation makes the reported association broader than a mechanical effect of repeatedly publishing with elite collaborators.

## Caveats

- Later non-top-coauthored papers can still benefit from reputation, topics, resources, or networks created by earlier elite collaboration.
- The validation does not prove whether the persistence comes from causal sponsorship or selection of unusually promising junior scientists.
- Citation counts should be field, cohort, and document-type normalized when comparing across career groups.

## Links

- [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md)
- [repeated top-coauthor access](../mechanisms/repeated_top_coauthor_access.md)
- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [top scientist selection confound](top_scientist_selection_confound.md)
- [top-coauthor regression predictor](top_coauthor_regression_predictor.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `non_top_coauthored_impact_persistence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: non-elite-coauthored impact persistence; top-coauthor-excluded impact; non-top-collaborator citation persistence; elite-collaboration spillover check
