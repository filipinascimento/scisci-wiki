# Multichannel scholarly influence attribution

## Summary

Influence in science can be attributed jointly to actors and channels by asking who influences whom through which scholarly layer.

## Canonical Form

- Unit of analysis: actor, paper, institution, channel, influence path, or layer-attributed relation.
- Typical representation: layer-attributed path or influence model over multiplex scholarly channels.
- Mechanism, measurement, or validation target: channel-specific paths of scholarly influence.
- Empirical signature: influence paths differ across citation, collaboration, acknowledgment, grant, patent, policy, and social-attention channels.

## Uses in Science of Science

- Connects scholarly influence mechanism tracing to [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md) and [citation networks](../representations/citation_networks.md).
- Provides a reusable motif for comparing [coauthorship networks](../representations/coauthorship_networks.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [patent paper links](../datasets/patent_paper_links.md) in linked scholarly data.

## Operationalization

- Model citations, coauthorship, acknowledgments, grants, patents, policy mentions, and social attention as distinct layers.
- Estimate influence paths and report both actor pairs and channel contributions.
- Validate whether claimed influence is causal, temporal, or only associative.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) says the tensor approach can infer who influences whom and through which media.
- Translated to science-of-science data, those media become scholarly relation layers rather than generic social channels.

## Caveats

- Influence is a stronger claim than association and requires temporal or causal validation.
- Path attribution can overstate channel specificity when layers share source data or coverage biases.

## Links

- [Multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [Citation networks](../representations/citation_networks.md)
- [Coauthorship and collaboration networks](../representations/coauthorship_networks.md)
- [Patent-paper links](../datasets/patent_paper_links.md)
- [Social media attention channels](../datasets/social_media_attention_channels.md)
- [Indirect peer-paper policy channel](../mechanisms/indirect_peer_paper_policy_channel.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multichannel_scholarly_influence_attribution`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/physrevx.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: channel-aware scholarly influence; layer-attributed influence paths; multiplex influence attribution; who-influences-whom-by-channel
