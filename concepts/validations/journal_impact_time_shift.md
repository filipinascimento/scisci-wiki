# Journal impact-time shift

## Summary

Journal impact-time shift is the validation pattern that a journal's short-window impact factor can fall or rise because its papers' citation timing changes, even when their long-term fitted impact increases.

## Canonical Form

- Unit of analysis: journal-year, article cohort, fitted journal fitness, journal immediacy, impact factor, or citation window.
- Typical representation: journal-level fitness and immediacy trajectories, impact-time trend, impact-factor decomposition, or short-window versus long-window comparison.
- Validation target: separate changes in durable article impact from changes in when citations arrive.
- Empirical signature: a journal's fitted long-term impact increases while its two-year impact factor weakens because citations shift later.

## Uses in Science of Science

- Adds a timing-based caveat to [journal impact factor](../measures/journal_impact_factor.md) and [journal metric article-level misuse](journal_metric_article_level_misuse.md).
- Uses [citation immediacy parameter](../measures/citation_immediacy_parameter.md) to interpret journal-level short-window indicators.
- Connects [paper fitness](../measures/paper_fitness.md) and [ultimate citation impact](../measures/ultimate_citation_impact.md) to journal portfolios.
- Supports [citation window selection](../methods/citation_window_selection.md) by showing that a fixed two-year window can miss delayed but durable journal impact.

## Operationalization

- Fit citation-history parameters for papers in each journal-year cohort.
- Aggregate paper-level fitness, immediacy, and longevity into journal-level analogs.
- Compare the journal's impact factor with fitted long-term impact and impact time.
- Test whether observed impact-factor changes are driven by fitness shifts, citation timing shifts, document-type mix, or self-citations.
- Report the census year and the citation window used for all journal metrics.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) connects impact factor to journal-level analogs of fitness, immediacy, and longevity.
- The paper compares Cell and NEJM from 1996 to 2006: both journals show increasing fitted long-term impact, but their impact factors move differently.
- Wang et al. attribute Cell's falling impact factor to a shift toward longer impact time, while NEJM's impact time remains approximately stable and its higher fitness translates into a higher impact factor.
- The same evidence shows that short-window journal metrics can confuse citation timing with durable article impact.

## Caveats

- Journal-level parameter estimates can be sensitive to article mix, review content, editorials, and field boundaries.
- Impact-time shifts are not automatically good or bad; they may reflect field tempo, article type, or delayed adoption.
- The validation does not remove other impact-factor problems such as denominator ambiguity, self-citation, or article-level misuse.
- Fitted journal parameters inherit citation-database and model-specification assumptions.

## Links

- [journal impact factor](../measures/journal_impact_factor.md)
- [citation immediacy parameter](../measures/citation_immediacy_parameter.md)
- [paper fitness](../measures/paper_fitness.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)
- [citation window selection](../methods/citation_window_selection.md)
- [journal metric article-level misuse](journal_metric_article_level_misuse.md)
- [equal-fitness citation convergence](equal_fitness_citation_convergence.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `journal_impact_time_shift`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: journal impact timing shift; impact-factor timing confound; journal immediacy shift; short-window journal impact caveat
