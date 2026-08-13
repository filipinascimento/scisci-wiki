# Online availability panel identification

## Summary

Online availability panel identification uses within-journal or within-subfield changes in electronic access to test whether citation behavior changes when archives come online.

## Canonical Form

- Unit of analysis: journal-year, subfield-year, archive-source-year, citation outcome, or access regime.
- Typical representation: panel regression with fixed effects, lagged availability, source-specific access variables, and citation-window outcomes.
- Validation target: reduce confounding by comparing the same source or field to itself before and after online availability changes.
- Empirical signature: citation outcomes shift with online availability after controlling for time trends, article length, reference counts, and topical age.

## Uses in Science of Science

- Validates [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md) against simple cross-sectional differences between journals or fields.
- Provides a reusable design for studying archive digitization, open access rollouts, repository coverage, search-interface changes, and platform recommendations.
- Links [online backfile depth](../measures/online_backfile_depth.md) to [reference-age search depth](../measures/reference_age_search_depth.md), [citation breadth via distinct cited sources](../measures/citation_breadth_distinct_sources.md), and [citation concentration Herfindahl](../measures/citation_concentration_herfindahl.md).
- Encourages explicit reporting of citation windows, access-route provenance, and source coverage.
- Uses the [CI-FSO online availability panel](../datasets/ci_fso_online_availability_panel.md) as the historical data template for joining citation behavior to source availability.
- Uses [commercial-free access channel contrast](../methods/commercial_free_access_channel_contrast.md) and [title-word age recency control](../methods/title_word_age_recency_control.md) to reduce route and topical-recency confounding.
- Complements [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) by asking whether results hold within source-specific panels.

## Operationalization

- Build a source-year panel linking citation outcomes to online-availability histories.
- Include fixed effects that compare journals or subfields to themselves as online availability shifts.
- Lag availability so the access measure precedes the citing articles' drafting and publication process.
- Model continuous outcomes such as reference age or Herfindahl concentration with linear regression and count outcomes such as distinct cited sources with count models.
- Add controls for citation year, average pages, average references, and topic-age proxies when the outcome could reflect broader scientific change.
- Preserve route-specific variables for commercial archives and free journal-web availability instead of collapsing all online access when route differences are theoretically relevant.
- Use an [overdispersed citation-breadth count model](../methods/overdispersed_citation_breadth_count_model.md) for distinct-source counts when counts are skewed and discrete.
- Re-estimate across alternative citation windows with an [expanding citation-window sweep](../methods/expanding_citation_window_sweep.md) to test whether effects are driven by very recent references or longer historical spans.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) uses fixed-effect specifications to compare journals and subfields only to themselves as their online availability shifted.
- Evans compares citation patterns when sources were available only in print, in print plus commercial archives, and online for free.
- The paper models average historical depth of citations and Herfindahl concentration with OLS, while modeling distinct cited articles and journals with fixed-effect negative binomial models.
- Evans includes controls for citation year, average pages, average references, and weighted title-word age to account for changing article form and topical recency.
- Evans also compares commercial and free online access states, and reports similar results after accounting for whether journals appeared in multiple commercial archives.
- The paper also tests expanding citation windows from 1 to 30 years and finds that online availability is associated with fewer distinct cited articles and journals across these windows, especially in recent years.

## Caveats

- Fixed effects do not remove all time-varying confounding, such as publisher strategy, journal quality changes, or field-specific digitization shocks.
- Availability can be measured more easily than actual exposure or reading behavior.
- Platform interfaces changed rapidly after the original 1998-2005 availability window, so current replications should use current Dimensions/OpenAlex/WoS/OpenAlex-style snapshots and platform logs where possible.

## Links

- [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md)
- [CI-FSO online availability panel](../datasets/ci_fso_online_availability_panel.md)
- [online backfile depth](../measures/online_backfile_depth.md)
- [commercial-free access channel contrast](../methods/commercial_free_access_channel_contrast.md)
- [title-word age recency control](../methods/title_word_age_recency_control.md)
- [overdispersed citation-breadth count model](../methods/overdispersed_citation_breadth_count_model.md)
- [expanding citation-window sweep](../methods/expanding_citation_window_sweep.md)
- [reference-age search depth](../measures/reference_age_search_depth.md)
- [citation breadth via distinct cited sources](../measures/citation_breadth_distinct_sources.md)
- [citation concentration Herfindahl](../measures/citation_concentration_herfindahl.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Web of Science](../datasets/web_of_science.md)
- [bibliometric data access modes](../methods/bibliometric_data_access_modes.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `online_availability_panel_identification`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: online access fixed effects; archive availability panel; journal availability panel; CI-FSO panel identification
