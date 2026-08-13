# Growth-normalized citation-age baseline

## Summary

Growth-normalized citation-age baseline estimates the expected cited-paper age distribution from literature growth, then treats deviations for recent papers as evidence of immediacy or research-front concentration.

## Canonical Form

- Unit of analysis: cited publication year, citing year, field, citation index, or cited-paper age bin.
- Typical representation: exponential growth baseline, cited-year curve, age-normalized citation rate, or recent-excess residual.
- Method target: separate ordinary literature growth from preferential citation of recent work.
- Empirical signature: older cited-year counts follow a smooth growth curve, while recent cited-year counts rise above that curve.

## Uses in Science of Science

- Provides the baseline behind [research-front citation share](../measures/research_front_citation_share.md) and [citation immediacy effect curve](../measures/citation_immediacy_effect_curve.md).
- Supports [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) by separating archive size from active-front attention.
- Gives a validation layer for [historical publication-shock citation-age caveat](../validations/historical_publication_shock_citation_age_caveat.md).
- Helps compare cited-year distributions across fields without treating all old-paper decline as cognitive obsolescence.

## Operationalization

- Build a cited-year distribution for one citation-index snapshot or citing-year cohort.
- Fit a background growth curve to older cited publication years where immediacy effects are weak.
- Mark known production shocks, source-coverage changes, or database expansions before fitting the baseline.
- Compute residual excess for recent cited years relative to the baseline.
- Report the fitted growth rate, fitting window, excluded shock intervals, and recent-window definition.

## Evidence and Validations

- Verified full-text evidence from Price (1965) uses Garfield's 1961 Science Citation Index data to compare cited-year counts with a long-run literature-growth curve.
- Price observes that papers older than roughly 15 years follow a background citation rate consistent with exponential literature growth.
- The paper estimates a doubling interval of about 13.5 years for the older literature baseline.
- Price then treats the recent-paper hump above this baseline as an immediacy effect rather than as ordinary growth.
- The same analysis handles wartime publication troughs separately, motivating a shock-aware baseline.

## Caveats

- The baseline depends on database coverage and on whether cited references are completely indexed.
- Recent excess can reflect faster literature growth, source expansion, field policy changes, or document-type mix as well as research-front attention.
- Fitting windows should exclude historical disruptions and be tested for sensitivity.

## Links

- [research-front citation share](../measures/research_front_citation_share.md)
- [citation immediacy effect curve](../measures/citation_immediacy_effect_curve.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation multiplicity-age gradient](../measures/citation_multiplicity_age_gradient.md)
- [historical publication-shock citation-age caveat](../validations/historical_publication_shock_citation_age_caveat.md)
- [citation data census dates](citation_data_census_dates.md)
- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [citation window selection](citation_window_selection.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `growth_normalized_citation_age_baseline`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: citation-age growth baseline; cited-year growth normalization; exponential citation-age baseline; literature-growth citation baseline
