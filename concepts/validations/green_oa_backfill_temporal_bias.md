# Green OA backfill temporal bias

## Summary

Green OA backfill temporal bias is the validation problem that repository deposits can occur before or years after publication, so a publication-year snapshot does not measure Green OA growth over time.

## Canonical Form

- Unit of analysis: repository deposit, article publication year, access snapshot, Green OA label, embargo period, or time series.
- Typical representation: publication-year OA share, deposit-date series, embargo-adjusted curve, shadowed-Green count, or longitudinal resolver snapshot.
- Validation target: distinguish Green OA availability by article age from actual year-over-year growth in repository self-archiving.
- Empirical signature: older publication years gain new Green copies over time because repositories are backfilled.

## Uses in Science of Science

- Qualifies [open access prevalence measurement](../measures/open_access_prevalence_measurement.md) and [open access route typology](../datasets/open_access_route_typology.md) when route shares are plotted by publication year.
- Complements [publisher-hosted route precedence](publisher_hosted_route_precedence.md), because shadowed repository copies can be hidden by exclusive route labels.
- Motivates storing deposit dates in [open access evidence locations](../representations/open_access_evidence_locations.md) and repeated resolver snapshots.
- Helps avoid interpreting a flat Green-by-publication-year curve as a lack of repository growth.

## Operationalization

- Separate article publication date from repository deposit or first-observed-open date.
- Use longitudinal resolver snapshots or repository metadata when estimating Green OA growth.
- Mark articles whose repository copies are shadowed by Gold, Hybrid, or Bronze publisher-hosted copies under exclusive route rules.
- Report embargo windows and backfill limitations whenever Green OA prevalence is plotted by publication year.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) warns that the date when a Green article becomes open is generally different from publication date.
- The paper notes that authors often self-archive years after publication, or before publication in the case of preprints, producing backfilled Green stocks.
- Piwowar et al. therefore state that their graph by publication year cannot show Green OA growth over time without longitudinal analysis.
- The limitations section reiterates that repository deposit timing was not detected, so the study measures Green OA by article publication date at the moment of collection.

## Caveats

- Repository metadata can be incomplete, inconsistent, or overwritten.
- Embargoes and publisher policies create real time lags, not only measurement artifacts.
- Exclusive route precedence can further hide repository availability when a publisher-hosted copy is also open.

## Links

- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [publisher-hosted route precedence](publisher_hosted_route_precedence.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [bronze open access ambiguity](bronze_open_access_ambiguity.md)
- [open access detection validation](open_access_detection_validation.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `green_oa_backfill_temporal_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: Green OA backfilling; repository deposit timing bias; self-archiving temporal bias; publication-year Green OA caveat
