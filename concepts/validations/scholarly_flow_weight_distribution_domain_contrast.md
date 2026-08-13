# Scholarly flow weight distribution domain contrast

## Summary

Scholarly flow weight distribution domain contrast is the validation motif that citation and collaboration edge-weight distributions should be compared with other spatial-flow systems rather than assumed to share the same form.

## Canonical Form

- Unit of analysis: weighted edge, city pair, citation flow, collaboration flow, trade flow, or mobile-phone flow.
- Typical representation: edge-weight distribution, domain contrast, broad-flow distribution, or self-link handling.
- Validation target: test whether scholarly flows resemble or differ from other social and economic spatial networks.
- Empirical signature: scholarly citation or collaboration weights show distributional shapes that contrast with mobile-phone or trade flows.

## Uses in Science of Science

- Adds cross-domain benchmarking to [world city citation network](../representations/world_city_citation_network.md) and [world city collaboration network](../representations/world_city_collaboration_network.md).
- Connects to [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md).
- Helps interpret whether scholarly spatial networks have domain-specific flow structure.

## Operationalization

- Fit and compare edge-weight distributions across scholarly, communication, mobility, and trade networks.
- Use consistent binning, normalization, and self-link rules.
- Report whether differences persist after controlling for node strength and distance.
- Compare citation and collaboration flows separately.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) contrasts scholarly citation and collaboration weight distributions with mobile-phone and world-trade networks.
- The paper shows that scholarly flows should not be automatically treated as generic spatial flows.

## Caveats

- Cross-domain datasets differ in measurement, sampling, and privacy constraints.
- Distributional contrast alone does not explain the mechanism.
- Self-links and within-city flows strongly affect weight distributions.

## Links

- [world city citation network](../representations/world_city_citation_network.md)
- [world city collaboration network](../representations/world_city_collaboration_network.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [city collaboration strength-degree scaling](../measures/city_collaboration_strength_degree_scaling.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `scholarly_flow_weight_distribution_domain_contrast`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: scholarly edge-weight domain contrast; citation flow distribution benchmark; collaboration flow distribution comparison
