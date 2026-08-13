# Country-Pair Cosine Intensity

## Summary

Country-pair cosine intensity uses cosine-normalized collaboration ties to identify unusually intense bilateral scientific collaboration relationships.

## Canonical Form

- Unit of analysis: country pair, coauthorship edge, international collaboration network, or bilateral collaboration matrix.
- Typical representation: cosine-normalized tie strength between countries.
- Mechanism or measurement target: relative intensity of bilateral collaboration beyond raw coauthorship volume.
- Empirical signature: some country pairs have high normalized intensity even if they are peripheral or geographically isolated.

## Uses in Science of Science

- Refines [country collaboration core](country_collaboration_core.md) and [regional collaboration hubs](regional_collaboration_hubs.md).
- Requires transparent [coauthorship country-counting rules](../methods/coauthorship_country_counting_rules.md).
- Helps interpret [international collaboration networks](../representations/international_collaboration_networks.md) beyond raw edge counts.
- Provides a measurement basis for [historical tie residual imprint](../validations/historical_tie_residual_imprint.md).

## Operationalization

- Construct a country-country coauthorship matrix.
- Normalize pairwise relationships with cosine similarity or a related association-strength measure.
- Inspect high-intensity dyads separately from high-volume core countries.
- Report whether high-intensity ties reflect geography, history, language, policy, or field composition.

## Evidence and Validations

- Verified full-text evidence from Wagner and Leydesdorff (2005) reports global data for 1990 and 2000 using integer country counting.
- The paper uses cosine analysis to view relationships that are particularly intense.
- Wagner and Leydesdorff note that some country pairs, often geographically proximate, have very close scientific relationships even when the groupings are otherwise isolated.

## Caveats

- Cosine-normalized intensity can highlight small dyads that are not globally central.
- Country counting rules and address parsing can change pairwise intensities.
- High intensity does not by itself identify the cause of the tie.

## Links

- [country collaboration core](country_collaboration_core.md)
- [regional collaboration hubs](regional_collaboration_hubs.md)
- [coauthorship country-counting rules](../methods/coauthorship_country_counting_rules.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)
- [historical tie residual imprint](../validations/historical_tie_residual_imprint.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; SciSciNet: W1964920419; WoS: unknown]

## Metadata

- Concept ID: `country_pair_cosine_intensity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: country-pair cosine collaboration; bilateral collaboration intensity; normalized country collaboration tie; cosine ICS intensity
