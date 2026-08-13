# Country-partner factor competition

## Summary

Factor structure in country coauthorship matrices can be used to infer competition among advanced countries for international partners.

## Canonical Form

- Unit of analysis: country, country pair, coauthorship matrix, cosine similarity, factor loading, or partner profile.
- Typical representation: factor-analysis loading profile over country collaboration matrices.
- Mechanism, measurement, or validation target: competition for collaboration partners in international science networks.
- Empirical signature: leading countries load on distinct partner profiles that suggest rivalry for less-developed-country collaboration ties.

## Uses in Science of Science

- Refines international-collaboration method by linking it to [country pair cosine intensity](../measures/country_pair_cosine_intensity.md) and [polycentric collaboration core competition](../mechanisms/polycentric_collaboration_core_competition.md).
- Useful as a reusable check when [country collaboration core](../measures/country_collaboration_core.md) is used in science-of-science inference.
- Creates cross-links to [scientific capacity network entry threshold](../mechanisms/scientific_capacity_network_entry_threshold.md) so the motif is not interpreted in isolation.

## Operationalization

- Build a country-country collaboration matrix and normalize pair intensities where appropriate.
- Run factor analysis or similar dimension-reduction over country partner profiles.
- Interpret competing partner-loading profiles alongside capacity, geography, and historical-tie checks.

## Evidence and Validations

- Verified local full text from Wagner and Leydesdorff (2005) states that factor analysis shows leading countries competing for coauthorship relations with less-developed countries.
- The method turns country partner structure into an inferred competition signal.

## Caveats

- Competition is inferred from structure and may be normalization-sensitive.
- Factor labels should be validated against policy, capacity, and historical explanations.

## Links

- [Country-pair cosine intensity](../measures/country_pair_cosine_intensity.md)
- [Polycentric collaboration-core competition](../mechanisms/polycentric_collaboration_core_competition.md)
- [Country collaboration core](../measures/country_collaboration_core.md)
- [Scientific-capacity network entry threshold](../mechanisms/scientific_capacity_network_entry_threshold.md)
- [Isolated regional collaboration components](../measures/isolated_regional_collaboration_components.md)
- [Historical tie residual imprint](../validations/historical_tie_residual_imprint.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; WoS: unknown]

## Metadata

- Concept ID: `country_partner_factor_competition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: country partner-loadings competition; collaboration factor competition; advanced-country partner rivalry
