# City-pair strength-product citation null

## Summary

City-pair strength-product citation null compares observed city-to-city citation flows with a random-mixing expectation based on source out-strength and target in-strength.

## Canonical Form

- Unit of analysis: directed city pair, citation weight, source out-strength, target in-strength, or null-model residual.
- Typical representation: strength-product expectation, directed weighted null, city-pair residual, or citation flow overrepresentation.
- Validation target: determine whether a city pair cites more or less than expected given endpoint citation volumes.
- Empirical signature: observed directed citation weight is compared with a product of source and target strengths.

## Uses in Science of Science

- Adds a directed weighted null to [world city citation network](../representations/world_city_citation_network.md).
- Complements [city citation strength-degree scaling](../measures/city_citation_strength_degree_scaling.md).
- Connects to [degree-preserving citation network null](../methods/degree_preserving_citation_network_null.md) for baseline construction.

## Operationalization

- Compute each city's outgoing citation strength and incoming citation strength.
- Estimate expected city-pair flow from the product of source out-strength and target in-strength.
- Compare observed-to-expected ratios by distance, country, and field.
- Treat self-links and within-city links separately.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) compares observed city citation weights with random expectations based on city citation strengths.
- The null helps separate overall city scale from pair-specific citation affinity.

## Caveats

- Strength-product nulls do not preserve all network structure.
- Field specialization and language can create residuals that are not purely geographic.
- Self-links require separate handling because they are unusually strong and heterogeneous.

## Links

- [world city citation network](../representations/world_city_citation_network.md)
- [city citation strength-degree scaling](../measures/city_citation_strength_degree_scaling.md)
- [degree-preserving citation network null](../methods/degree_preserving_citation_network_null.md)
- [within-city citation self-link bias](../measures/within_city_citation_self_link_bias.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `city_pair_strength_product_citation_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: city citation strength-product null; directed city-flow citation baseline; observed-expected city citation residual
